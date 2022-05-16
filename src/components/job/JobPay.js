import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const JobPay = ({jobDistance, jobPay}) => {

    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

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
                        {jobDistance} miles
                    </Typography>
                </Grid>
                <Grid item xs={6} color="common.white">
                    <Typography gutterBottom variant="h5" component="span">
                        {currencyFormat(jobPay)}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
        </Card>
    </ThemeProvider>

  )
}

JobPay.defaultProps = {
    jobDistance: 5,
    jobPay: 10,
}

JobPay.propTypes = {
    jobDistance: PropTypes.number.isRequired,
    jobPay: PropTypes.number.isRequired,
}


export default JobPay