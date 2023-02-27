import { useEffect } from 'react'
import { useAppContext } from '../../Context/AppContext'
import { StatsContainer, Loading, ChartsContainer } from '../../Components'

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()
  useEffect(() => {
    showStats()
  }, [])

  if (isLoading) {
    return <Loading center />
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}

export default Stats






// const Stats = () => {
//     return <h1> Stats Page</h1>
//     }
    
//     export default Stats