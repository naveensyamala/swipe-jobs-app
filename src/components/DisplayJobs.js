
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
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useState } from "react";

const DisplayJobs = ({currentJob, currentJobIndex, jobs, onPrevious, onNext, acceptJob, rejectJob}) => {

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        severity: 'success',
        message: ''
      });
    
    const { vertical, horizontal, open,severity, message } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
      };

    const handleReject = async (jobId) =>{
       const data = await rejectJob(jobId)
       console.info(data)
       setState({ ...state, 
        open: true, 
        severity:data.success? 'success' : 'error', 
        message: data.message?  data.message: 'This Operation is Successful'});
    }

    const handleAccept = async (jobId) =>{
        const data = await acceptJob(jobId)
        console.info(data)
        setState({ ...state, 
         open: true, 
         severity:data.success? 'success' : 'error', 
         message: data.message?  data.message: 'This Operation is Successful'});
     }

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
            <Button size="large" variant="text" onClick={() => handleReject(currentJob.jobId)} >No Thanks</Button>
            <Button size="large" variant="contained"  onClick={() => handleAccept(currentJob.jobId)} >I'll Take it</Button>
            </Stack>
            <IconButton size="large" disabled= {currentJobIndex === 0}
            style={{top: "80%", position: "absolute", left: "1%"}}
            onClick={onPrevious}>          
                <ArrowBackIos/>
            </IconButton>
            <IconButton disabled= {currentJobIndex === jobs.length-1}
            size="large" style={{top: "80%", position: "absolute", left: "90%"}}
            onClick={onNext}>
                <ArrowForwardIosIcon/>
            </IconButton>

            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                autoHideDuration={6000}
                open={open}
                onClose={handleClose}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity={ severity } sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Container>
    )
}

DisplayJobs.propTypes = {
    currentJob: PropTypes.object.isRequired,
    currentJobIndex: PropTypes.number.isRequired,
    jobs: PropTypes.array.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    acceptJob: PropTypes.func.isRequired,
    rejectJob:  PropTypes.func.isRequired,
}


export default DisplayJobs