import React from 'react';
import './nav.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from './home';
import About from './about';
import Contact from './contact';

function Nav() {
  return (
    <Router>
    <div className="App">
      <AppBar position='static'>
          <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
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
    </div>
    </Router>
  );
}

export default Nav;