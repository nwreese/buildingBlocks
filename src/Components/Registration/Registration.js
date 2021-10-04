import React, { useState } from "react";
import "./Registration.css";
import img from "./golfcourse3.jpg";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './bb4k-wide-logo.png';

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
  TextareaAutosize
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 50,
    color: 'rgba(24, 189, 206, 1)',
    fontSize: 25
  },
  root: {
    marginTop: -20,
    maxWidth: 500,
    margin: 'auto',
    backgroundColor: 'rgba(52, 52, 52, .9)',
    color: 'rgba(24, 189, 206, 1)'
  },
  root2:{
    marginTop: 0,
    maxWidth: 900,
    margin: 'auto',
    backgroundColor: 'rgba(52, 52, 52, .9)',
    color: 'rgba(24, 189, 206, 1)'
  },
  media: {
    height: 202,
  },
  button: {
    color: 'rgba(24, 189, 206, 1)',
    margin: 'auto'
  },
  Typography: {
      marginTop: 50
  }
}));

export default function Registration() {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleChange = e => setValue(e.target.value);

  return (
    <div className="App">
      <div className="background-image" style={{ 
                  backgroundImage: `url(${img})` 
                }}>
     <Card className="Blocks" className={classes.root}>
    
     <br></br>
     <p>Please enter your Info</p>
     <br></br>
       <TextareaAutosize
  aria-label="empty textarea"
  placeholder="Name"
  style={{ width: 300 }}
/>
<br></br>
       <TextareaAutosize
  aria-label="empty textarea"
  placeholder="Email"
  style={{ width: 300 }}
/>
       <br></br>
       <TextareaAutosize
  aria-label="empty textarea"
  placeholder="Handicap"
  style={{ width: 300 }}
/>
<br></br>
<br></br>
     <FormControl className="Blocks" className={classes.formControl}>
       <br></br>
        <InputLabel className="Shirt">Shirt Size</InputLabel>
        <Select className="Blocks" onChange={handleChange}>
          <MenuItem value={'Small'}>Small</MenuItem>
          <MenuItem value={'Medium'}>Medium</MenuItem>
          <MenuItem value={'Large'}>Large</MenuItem>
          <MenuItem value={'X-Large'}>X-Large</MenuItem>
          <MenuItem value={'XX-Large'}>XX-Large</MenuItem>
        </Select>
        <br></br>
        <p>You Selected: {value}</p>
       <br></br>
     
      </FormControl>
      <br></br>
      <br></br>
 </Card>
<br></br>
<br></br>
<Card className="Blocks" className={classes.root2}>
<CardMedia
          className={classes.media}
          image={logo}
          title="Nick Reese"
        />
</Card>
     
    </div>
    </div>
  );
}



