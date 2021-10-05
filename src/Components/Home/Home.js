import React from 'react';
import  "./Home.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './bb4k-stacked-logo.png';
import img from "./golfcourse4.jpg";
import logo2 from './golfkids3.jpg';

const useStyles = makeStyles({
    root: {
      marginTop: -60,
      maxWidth: 840,
      margin: 'auto',
      backgroundColor: 'rgba(255, 255, 255, .1)',
      color: 'rgba(24, 189, 206, 1)'
    },
    media: {
      height: 350,
      marginTop: 100
    },
    button: {
    justifyContent: 'center',
    marginTop: 60,
    marginLeft: 325,
    backgroundColor: 'rgba(52, 52, 52, 1)',
    color: 'rgba(198, 56, 147, 1)'
     },
    Typography: {
        fontSize: 20
    }
  });

function Home() {
    const classes = useStyles();
    const Registration = () => {
      window.location.href="#/Registration"
  }
    return (
      <div className="home-image" style={{ 
        backgroundImage: `url(${img})` 
      }}>
        <div>
<Card  className="Blocks" className={classes.root}>
  <br></br>
<CardContent>
  <br></br>
  <br></br>
          <br></br>
          <br></br>
          <br></br>
        <Typography className="Welcome" gutterBottom variant="h4" component="h4">
            Welcome to the Building Blocks 4 Kids Golf Outing!
          </Typography> 
          
        </CardContent>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Button 
    onClick={Registration}
      color='primary'
      size='large'
      type='submit'
      variant='contained'
      className={classes.button}
     >
      Sign Up
    </Button>
    <br></br>
    <br></br>
        <CardMedia
          className={classes.media}
          image={logo2}
          title="Nick Reese"
        />
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={logo}
          title="Nick Reese"
        />
      <Typography align='center'>
  </Typography>
</CardActionArea>
    </Card>
    
        </div>
        </div>
    )
}
export default Home