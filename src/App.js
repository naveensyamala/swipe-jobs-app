import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { useState, useEffect } from "react";
import DisplayJobs from "./components/DisplayJobs";

function App() {

  const [myAssignedJobs, setMyAssignedJobs] = useState([])
  const [jobs, setJobs] = useState([])
  const [currentJob, setCurrentJob] = useState({})
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
    console.info(data)
    if(data!= null && data.length!== 0){
      setCurrentJob(data[0])
    }
    return data
  }

  const fetchProfileInfo = async() => {
    const res = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/profile`)  
    const data = await res.json()
    console.info(data)
    return data
  }


  const onPrevious = () => {
    if(currentJob.id > 1){
      setCurrentJob(jobs[currentJob.id-2])
    }
  }

  const onNext = () => {
    if(currentJob.id < jobs.length){
      setCurrentJob(jobs[currentJob.id])
    }
  }
  
  const addToMyJobs = (id) => {
    myAssignedJobs.push(jobs[currentJob.id-1])
  }

  const removeJob = (id) => {
    console.info(id)
    console.info(myAssignedJobs)
    console.info(jobs[currentJob.id-1])
    myAssignedJobs.push(jobs[currentJob.id-1])
    console.info(myAssignedJobs)
  }

  return (
    <Router>
      <Header firstName={profile.firstName} lastName={profile.lastName}/>
      <Routes>
        <Route  
          path = '/'  
          element = {
          <DisplayJobs 
          currentJob={currentJob} 
          onNext={onNext} 
          jobs ={jobs} 
          onPrevious ={onPrevious}
          addToMyJobs = {addToMyJobs}
          />}>
        </Route>
      </Routes>
  </Router>
  );
}

export default App;
