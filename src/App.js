import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Nav from './component/nav';
function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;