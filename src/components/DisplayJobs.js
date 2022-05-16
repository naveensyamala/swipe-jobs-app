
import PropTypes from 'prop-types'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import JobTitle from "./job/JobTitle";
import JobPay from "./job/JobPay";
import JobDetails from "./job/JobDetails";

const DisplayJobs = ({currentJob, jobs, onPrevious, onNext, addToMyJobs}) => {
  
  return (
    <Container>
        <JobTitle jobName= {currentJob.jobTitle?.name} jobCompany= {currentJob.company?.name} jobUrl={currentJob.jobTitle?.imageUrl}/>
        <JobPay jobDistance={currentJob.milesToTravel} jobPay={currentJob.wagePerHourInCents}/>
        <JobDetails 
            shifts= {currentJob.shifts} 
            location= {currentJob.company?.address?.formattedAddress}
            requirements={currentJob.requirements}
            reportName= {currentJob.company?.reportTo?.name}
            reportContact={currentJob.company?.reportTo?.phone}/>
        <Stack spacing={2} direction="row"  justifyContent="center" alignItems="center" style={{ margin: '1em 0' }}>
        <Button size="large" variant="text">No Thanks</Button>
        <Button size="large" variant="contained"  onClick={() => addToMyJobs(currentJob.id)} >I'll Take it</Button>
        </Stack>
        <IconButton size="large" disabled= {currentJob.id === 1}
        style={{top: "80%", position: "absolute", left: "1%"}}
        onClick={onPrevious}>          
            <ArrowBackIos/>
        </IconButton>
        <IconButton disabled= {currentJob.id === jobs.length}
        size="large" style={{top: "80%", position: "absolute", left: "90%"}}
        onClick={onNext}>
            <ArrowForwardIosIcon/>
        </IconButton>
    </Container>
  )
}

DisplayJobs.propTypes = {
    currentJob: PropTypes.object.isRequired,
    jobs: PropTypes.array.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    addToMyJobs: PropTypes.func.isRequired,
}


export default DisplayJobs