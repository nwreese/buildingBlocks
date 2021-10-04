import React from 'react';
import  "./Agenda.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './bb4k-stacked-logo.png';
import img from "./golfcourse7.jpg";

const useStyles = makeStyles({
    root: {
      marginTop: -50,
      maxWidth: 500,
      margin: 'auto',
      backgroundColor: 'rgba(52, 52, 52, .3)',
      color: 'rgba(24, 189, 206, 1)'
    },
    media: {
      height: 350,
    },
    button: {
      color: 'rgba(198, 56, 147, 1)',
      margin: 'auto'
    },
    Typography: {
        marginTop: 50
    }
  });

function Agenda() {
    const classes = useStyles();
    const Registration = () => {
      window.location.href="#/Registration"
  }

    return (
      <div className="background-image" style={{ 
        backgroundImage: `url(${img})` 
      }}>
        <div>
          <Card className="Blocks" className={classes.root}>
      <CardActionArea className="agenda">
        <CardContent>
          <br></br>
          <br></br>
        <Typography className={classes.Typography} gutterBottom variant="h4" component="h4">
            Join us for 18 holes of golf!
            </Typography> 
            <Typography className={classes.Typography} gutterBottom variant="h6" component="h4">
            Help us raise money for Building Blocks 4 Kids! 
            <br></br>
            Prizes included!
            <br></br>
            Closest to pin on Par 3 
            <br></br>
            Longest drive on Par 5
            <br></br>
            And more!
          </Typography> 
        </CardContent>
        <Button
    onClick={Registration}
      color='primary'
      size='large'
      type='submit'
      variant='contained'
      className='button'
     >
      Sign Up
    </Button>
      </CardActionArea>
    </Card>
    
        </div>
        </div>
    )
}
export default Agenda