import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const JobPay = ({jobDistance, jobPay}) => {

    const theme = createTheme({
        palette: {
            background: {
                paper: '#20B2AA',
            },
        },
    });
  
    return (
    <ThemeProvider theme={theme}>
        <Card variant="outlined">
        <CardContent>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Typography gutterBottom variant="h6" component="span">
                        Distance
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom variant="h6" component="span">
                        HourlyRate
                    </Typography>
                </Grid>
                <Grid item xs={6} color="common.white">
                    <Typography gutterBottom variant="h5" component="span">
                        {jobDistance}
                    </Typography>
                </Grid>
                <Grid item xs={6} color="common.white">
                    <Typography gutterBottom variant="h5" component="span">
                        {jobPay}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
        </Card>
    </ThemeProvider>

  )
}

JobPay.defaultProps = {
    jobDistance: '5. 6 miles',
    jobPay: '$ 13.50',
}

JobPay.propTypes = {
    jobDistance: PropTypes.string.isRequired,
    jobPay: PropTypes.string.isRequired,
}


export default JobPay