import './Registration.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from "./golfcourse.jpg";
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      marginTop: -40,
      margin: 'auto',
      backgroundColor: 'rgba(52, 52, 52, 0.9)',
      color: 'rgba(255, 99, 71, 1)',
      display: 'flex'
    },
    media: {
      height: 200
    },
    button: {
      color: 'rgba(255, 99, 71, 1)',
      margin: 'auto'
    }
  });

  const theme = createMuiTheme({
    typography: {
      fontSize: 50,
    },
  });

function Registration() {
    const classes = useStyles();
   
    return (
        <div>
       <div className="background-image" style={{ 
                  backgroundImage: `url(${img})` 
                }}>
        <div>
      
      </div>
      </div>
      </div>
    );
  }
  
  export default Registration;
  