import React from 'react';
import  "./Home.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';
import logo from './bb4k-stacked-logo.png';
import img from "./golfcourse4.jpg";

const useStyles = makeStyles({
    root: {
      marginTop: -40,
      maxWidth: 840,
      margin: 'auto',
      backgroundColor: 'rgba(52, 52, 52, .3)',
      color: 'rgba(24, 189, 206, 1)',
    },
    media: {
      height: 350,
      marginTop: 100
    },
    button: {
      color: 'rgba(255, 99, 71, 1)',
      margin: 'auto'
    },
    Typography: {
        fontSize: 20
    }
  });

function Home() {
    const classes = useStyles();
    
    return (
      <div className="background-image" style={{ 
        backgroundImage: `url(${img})` 
      }}>
        <div>
<Card className="Blocks" className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Nick Reese"
        />
        <CardContent>
        <Typography gutterBottom variant="h4" component="h4">
            Welcome to the Building Blocks 4 Kids Golf Outing!
          </Typography> 
        </CardContent>
      </CardActionArea>
    </Card>
    
        </div>
        </div>
    )
}
export default Home