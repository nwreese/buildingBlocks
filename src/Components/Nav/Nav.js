import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Nav.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color: 'rgba(255, 99, 71, 1)',
      marginTop: 20
    },
    menuButton: {
      marginRight: theme.spacing(2),
      backgroundColor: 'rgba(52, 52, 52, 1)',
    color: 'rgba(255, 99, 71, 1)'
    },
    title: {
      flexGrow: 1,
      backgroundColor: 'rgba(52, 52, 52, 1)',
    color: 'rgba(255, 99, 71, 1)'
    },
    customHeight: {
        minHeight: 8
      },
      paper: {
        marginRight: theme.spacing(2),
      },
  }));


  function Nav2() {
   
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);
        const anchorRef = React.useRef(null);
      
        const handleToggle = () => {
          setOpen((prevOpen) => !prevOpen);
        };
      
        const handleClose = (event) => {
          if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
          }
      
          setOpen(false);
        };
      
        const handleClose1 = () => {
            window.location.href="#/Agenda"
        }
        const handleClose2 = () => {
            window.location.href="#/"
        }
        const handleClose3 = () => {
            window.location.href="#/Registration"
        }
        function handleListKeyDown(event) {
          if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
          }
        }
      
        // return focus to the button when we transitioned from !open -> open
        const prevOpen = React.useRef(open);
        React.useEffect(() => {
          if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
          }
      
          prevOpen.current = open;
        }, [open]);
      
    return (
      
        
        <Nav>
       
       <div className={classes.root}>
     
      <div>
        <Button 
          className="button"
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Building Blocks For Kids
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className="paper">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className="menu" autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose1}>Agenda</MenuItem>
                    <MenuItem onClick={handleClose3}>Registration</MenuItem>
                    <MenuItem onClick={handleClose2}>Home</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
 </Nav>

    
    );
    
  }

  export default Nav2;