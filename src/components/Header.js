import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Header = ({firstName, lastName}) => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#808080',
      },
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar>        
            <div style={{ flex: 1 }}>
              <img src={process.env.PUBLIC_URL +"/sj-logo-sj.svg"} alt="Swipejobs" height="50" />
            </div>
            <Typography variant="h5">
                {firstName} {lastName} 
            </Typography>
          </Toolbar>
    </AppBar>
  </ThemeProvider>
  )
}

Header.defaultProps = {
  firstName: 'Naveen',
  lastName: 'Syamala'
}

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}


export default Header