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
import logo from './golfswag.jpg';
import logo2 from './golfswag3.jpg';
import img from "./golfcourse7.jpg";

const useStyles = makeStyles({
    root: {
      marginTop: -60,
      maxWidth: 500,
      margin: 'auto',
      backgroundColor: 'rgba(52, 52, 52, .5)',
      color: 'rgba(24, 189, 206, 1)'
    },
    root2:{
      marginTop: 0,
      maxWidth: 500,
      margin: 'auto',
      backgroundColor: 'rgba(52, 52, 52, .9)',
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
      <div className="agenda-image" style={{ 
        backgroundImage: `url(${img})` 
      }}>
        <div>
          <Card className="Blocks" className={classes.root}>
      <CardActionArea className="agenda">
        <CardContent>
          
        <Typography className={classes.Typography} gutterBottom variant="h4" component="h4">
            Join us for 18 holes of golf!
            </Typography> 
            <Typography className={classes.Typography} gutterBottom variant="h6" component="h4">
            Help us raise money for Building Blocks 4 Kids
            <br></br>
            Prizes included!
            <br></br>
            Closest to pin on Par 3 
            <br></br>
            Longest drive on Par 5
            <br></br>
            And more!
          </Typography> 
          <br></br>
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
    <br></br>
    <Card className="Blocks" className={classes.root2}>
<CardMedia
          className={classes.media}
          image={logo}
          title="Nick Reese"
        />
</Card>
<br></br>
<Card className="Blocks" className={classes.root2}>
<CardMedia
          className={classes.media}
          image={logo2}
          title="Nick Reese"
        />
</Card>
      </CardActionArea>
      </Card>

   
        </div>
        </div>
    )
}
export default Agenda