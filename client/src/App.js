import "./App.css";
//import normalize.css file
import "normalize.css";
//import Router 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import all the files in one .js file
import { Register, Error, Landing, ProtectedRoute } from "./Pages";
// import Landing from "./Pages/Landing";
// import StyledComponent from "./StyledComponent";

import { AllJobs, Profile, SharedLayout, Stats, AddJob } from './Pages/dashboard'

function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <ProtectedRoute>
          <SharedLayout />
          </ProtectedRoute>
          }>
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
         </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
