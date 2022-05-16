import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const JobDetails = ({shifts, location, requirements, reportName, reportContact}) => {

    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container spacing={1} 
                    alignItems="center" 
                    justifyContent="center" 
                    style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', margin: '1em 0' }}>
                    <Grid item xs={1}>
                        <CalendarMonthIcon/>
                    </Grid>
                    <Grid item xs={11}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="span">
                            Shift Dates
                        </Typography>
                    </Grid>
                    {shifts.map((shift, index) => (
                        <Grid item xs={12} >
                            <Typography gutterBottom variant="subtitle1" component="span">
                                {shift.startDate} {shift.startDate}
                            </Typography>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>

                <Grid container spacing={1} 
                    alignItems="center" 
                    justifyContent="center" 
                    style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', margin: '1em 0' }}>
                    <Grid item xs={1}>
                        <LocationOnIcon/>
                    </Grid>
                    <Grid item xs={11}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="span">
                            Location
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography gutterBottom variant="subtitle1" component="span">
                            {location}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={1} 
                    alignItems="center" 
                    justifyContent="center" 
                    style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', margin: '1em 0' }}>
                    <Grid item xs={1}>
                        <ConstructionIcon/>
                    </Grid>
                    <Grid item xs={11}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="span">
                            Requirements
                        </Typography>
                    </Grid>
                    {requirements.map((requirement, index) => (
                        <Grid item xs={12} >
                            <Typography gutterBottom variant="subtitle1" component="span">
                                {requirement}
                            </Typography>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="center" justifyContent="center">
                    <Grid item xs={1}>
                        <AccountCircleRoundedIcon/>
                    </Grid>
                    <Grid item xs={11}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="span">
                            Reports To
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography gutterBottom variant="subtitle1" component="span">
                            {reportName} {reportContact}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
  )
}

JobDetails.defaultProps = {
    shifts: ['APR 7, WED 8:00 AM - 10:00 PM PDT', 'APR 7, WED 8:00 AM - 10:00 PM PDT'],
    location: "123 Main Street, Tacoma, WA 98409",
    requirements: ['Safety Vests', 'Hard Hat'],
    reportName: 'Dave Jhones',
    reportContact: '(123) 456 789'
}

JobDetails.propTypes = {
    shifts: PropTypes.array.isRequired,
    location: PropTypes.string.isRequired,
    requirements: PropTypes.array.isRequired,
    reportName: PropTypes.string.isRequired,
    reportContact: PropTypes.string.isRequired,
}


export default JobDetails