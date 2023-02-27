import Job from '../models/Job.js'
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError, UnAuthenticatedError } from '../errors/index.js'
import checkPermission from '../utils/checkPermission.js';
import mongoose from 'mongoose';
import moment from 'moment'



const createJob = async (req, res) => {
  const {position, company} = req.body

if(!position || !company) {
  throw new BadRequestError('Please Provide all values')
}
req.body.createdBy = req.user.userId
const job = await Job.create(req.body)
res.status(StatusCodes.CREATED).json({job})

};


const getAllJob = async (req, res) => {
  const { search, status, jobType, sort } = req.query
  const queryObject = {
    createdBy: req.user.userId,
  }
  if (search) {
    queryObject.position = { $regex: search, $options: 'i' }
  }
  if (status !== 'all') {
    queryObject.status = status
  }
  if (jobType !== 'all') {
    queryObject.jobType = jobType
  }
  let result = Job.find(queryObject)

  if (sort === 'latest') {
    result = result.sort('-createdAt')
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt')
  }
  if (sort === 'a-z') {
    result = result.sort('position')
  }
  if (sort === 'z-a') {
    result = result.sort('-position')
  }

  // setup pagination
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit

  result = result.skip(skip).limit(limit)

  const jobs = await result

  const totalJobs = await Job.countDocuments(queryObject)
  const numOfPages = Math.ceil(totalJobs / limit)

  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages })
}









// const getAllJob = async (req, res) => {
//   const { search, status, jobType, sort } = req.query

//   const queryObject = {
//     createdBy: req.user.userId,
//   }

//   if (status !== 'all') {
//     queryObject.status = status
//   }
//   if (jobType !== 'all') {
//     queryObject.jobType = jobType
//   }
//   if (search) {
//     queryObject.position = { $regex: search, $options: 'i' }
//   }
//   // NO AWAIT
//   let result = Job.find(queryObject)

//   // chain sort conditions
//   if (sort === 'latest') {
//     result = result.sort('-createdAt')
//   }
//   if (sort === 'oldest') {
//     result = result.sort('createdAt')
//   }
//   if (sort === 'a-z') {
//     result = result.sort('position')
//   }
//   if (sort === 'z-a') {
//     result = result.sort('-position')
//   }
//   const jobs = await result

//   res
//     .status(StatusCodes.OK)
//     .json({ jobs, totalJobs: jobs.length, numOfPages: 1 })
// }




// const getAllJob = async (req, res) => {
//   const jobs = await Job.find({ createdBy: req.user.userId })
//   res.status(StatusCodes.OK).json({ jobs, totalJobs: jobs.length, numOfPages: 1 })
// };
const updateJob = async (req, res) => {
 const { id: jobId } = req.params
 const { company, position} = req.body
if(!position || !company) {
  throw new BadRequestError('Please Provide All Values')
}

const job = await Job.findOne({ _id: jobId })

if(!job) {
  throw new NotFoundError(`No job with id : ${jobId}`)
}

//check permission

checkPermission(req.user, job.createdBy)

const updatedJob = await Job.findOneAndUpdate({_id: jobId}, req.body, {
  new: true,
  runValidators: true
}) 


//Alternative way to updated job

// job.position = position
// job.company = company
// job.jobLocation = jobLocation
// await job.save()
// res.status(StatusCodes.OK).json({job})


res.status(StatusCodes.OK).json({updatedJob})

};
const deleteJob = async (req, res) => {
  const { id: jobId } = req.params
  
 
 const job = await Job.findOne({ _id: jobId })
 
 if(!job) {
   throw new NotFoundError(`No job with id : ${jobId}`)
 }
 
 //check permission
 
 checkPermission(req.user, job.createdBy)

 await job.remove()
 res.status(StatusCodes.OK).json({ msg: 'Success! Job removed'})
 
};
const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match : { createdBy: mongoose.Types.ObjectId(req.user.userId)}},
    { $group : { _id: '$status', count: { $sum: 1 }}},
  ])
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr
    acc[title] = count
  return acc

  }, {})
  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  }
  // let monthlyApplications = []

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: {
          year: {
            $year: '$createdAt',
          },
          month: {
            $month: '$createdAt',
          },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ])

  monthlyApplications = monthlyApplications
  .map((item) => {
    const {
      _id: { year, month },
      count,
    } = item
    // accepts 0-11
    const date = moment()
      .month(month - 1)
      .year(year)
      .format('MMM Y')
    return { date, count }
  })
  .reverse()

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications })
};

export { createJob, deleteJob, getAllJob, updateJob, showStats };
