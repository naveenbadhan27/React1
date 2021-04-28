import React from 'react';
import clsx from 'clsx';
import './nav.css';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {AppBar, Toolbar, Button, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Home from './home';
import About from './about';
import Contact from './contact';
import Login from './login';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Nav() {




  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
            <Link to="/Login" className='decoration'>
              <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              Login / Register
              </ListItem>
            </Link>
      </List>
    </div>
  );






  return (
    <Router>
    <div className="App">
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
      <AppBar position='static'>
          <Toolbar>
          <IconButton onClick={toggleDrawer('left',true)} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Link className='Nav-item' to='/'>Home</Link>
            <Link className='Nav-item' to='/About'>About</Link>
            <Link className='Nav-item' to='/Contact'>Contact</Link>
        </Toolbar>
      </AppBar>
      <Route path="/" exact component={Home} />
      <Route path="/About" exact component={About} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/Login" component={Login} />
    </div>
    </Router>
  );
}

export default Nav;