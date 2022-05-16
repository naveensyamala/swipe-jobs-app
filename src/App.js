import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState, useEffect } from "react";
import DisplayJobs from "./components/DisplayJobs";

function App() {

  const [jobs, setJobs] = useState([])
  const [currentJob, setCurrentJob] = useState({})
  const [currentJobIndex, setCurrentJobIndex] = useState(-1)
  const [profile, setProfile] = useState([])
  const workerId = '7f90df6e-b832-44e2-b624-3143d428001f'
  useEffect(() => {

    const getProfile = async () => {
      const profileFromServer = await fetchProfileInfo()
      setProfile(profileFromServer)
    }

    const getJobs = async () => {
      const jobsFromServer = await fetchJobInfo()
      setJobs(jobsFromServer)
    }
    getProfile()
    getJobs()
  }, [])

  const fetchJobInfo = async() => {
    const res = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/matches`)  
    const data = await res.json()
    if(data!= null && data.length!== 0){
      setCurrentJob(data[0])
      setCurrentJobIndex(0)
    }
    return data
  }

  const fetchProfileInfo = async() => {
    const res = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/profile`)  
    const data = await res.json()
    console.info(data)
    return data
  }

  const acceptJob = async(jobId) => {
    const res = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/accept`)  
    const data = await res.json()
    return data
  }
  
  const rejectJob = async(jobId) => {
    const res = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/reject`)  
    const data = await res.json()
    console.info(data)
    return data
  }


  const onPrevious = () => {
    console.info(currentJobIndex)
    if(currentJobIndex > 0){
      setCurrentJobIndex(currentJobIndex - 1)
      setCurrentJob(jobs[currentJobIndex - 1])
    }
  }

  const onNext = () => {
    if(currentJobIndex < jobs.length-1){
      setCurrentJobIndex(currentJobIndex + 1)
      setCurrentJob(jobs[currentJobIndex + 1])
    }
  }


  return (
    <Router>
      <Header firstName={profile.firstName} lastName={profile.lastName}/>
      <Routes>
        <Route  
          path = '/'  
          element = {
          <DisplayJobs 
          currentJob={ currentJob } 
          currentJobIndex = {currentJobIndex}
          onNext={ onNext } 
          jobs ={ jobs } 
          onPrevious ={ onPrevious }
          acceptJob = { acceptJob }
          rejectJob= { rejectJob }
          />}>
        </Route>
      </Routes>
  </Router>
  );
}

export default App;
