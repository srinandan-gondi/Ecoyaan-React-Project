import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import BottomBar from './components/BottomBar';
import GraphicScroller from './components/GraphicScroller';
import Home from './components/Home';
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from "react-router-dom" 

function App() {
  return (
    <>
      <Navbar />
      
      <Router>
        <Routes>
        <Route path="/" element= <Home />> </Route>
          <Route path="/aboutus" element= <AboutUs />> </Route>
        </Routes>
      </Router>

      




      <BottomBar />
      
    </>
  );
}

export default App;
