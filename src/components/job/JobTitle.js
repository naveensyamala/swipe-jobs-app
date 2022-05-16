import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const JobTitle = ({jobName, jobCompany, jobUrl}) => {
  
  return (
    <Card variant="outlined">
        <CardMedia
        component="img"
        height="250"
        src={jobUrl}
        alt={jobName}
        />
        <CardContent>
\            <Typography gutterBottom variant="h4" component="div">
                {jobName}
        </Typography>
        <Typography variant="h5">
            {jobCompany}
        </Typography>
        </CardContent>
    </Card>
  )
}

JobTitle.defaultProps = {
    jobName: 'Construction General Worker',
    jobCompany: 'C.D Burners & Associates',
    jobUrl:'/'
}

JobTitle.propTypes = {
    jobName: PropTypes.string.isRequired,
    jobCompany: PropTypes.string.isRequired,
    jobUrl: PropTypes.string.isRequired,
}


export default JobTitle