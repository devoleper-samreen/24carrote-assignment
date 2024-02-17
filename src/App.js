import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense } from "react";
import slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./components/Loader"
import './App.css';
import Navbar from "./components/Navbar"
import VideoClip from "./components/VideoClip";
import WelcomePage from "./components/welcomePage";
import Wedding from "./components/Wedding";

function App() {
  return (
    <Router>
    <Suspense fallback={<Loader/>}>
      {/*always show components*/}
      <Navbar/>
      <VideoClip/>
      <WelcomePage/>
      <Wedding/>
      
    <Routes>
      {/*div 1 routes */}
      <Route path="/about"></Route>
      <Route path="/services" ></Route>
      <Route path="/events" ></Route>
      
      {/*div3 routes */}
      <Route path="/venues" ></Route>
      <Route path="/careers" ></Route>
    </Routes>
    </Suspense>
  </Router>

      );
}

export default App;
