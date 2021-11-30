import React from "react";
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Login from './components/Login';
import Signup from './components/Signup';
import CallToAction from './pages/CallToAction'
import Form from './pages/Form'
import Resume from './pages/Resume';
import WorkExperienceSection from './pages/WorkExperienceSection';
import Experience from './pages/Experience';
import Resource from './pages/Resource';
import About from './pages/Aboutus';
import StepsToMake from './pages/StepsToMake';
import OurFeatures from './pages/OurFeatures'
import GuideUs from './pages/GuideUs';
import FormData from './pages/FormData'
import Education from './pages/Education';
import EducationForm from './pages/EducationForm'
import Sidebar from "./pages/sidebar";

import Erropage from './pages/errorpage'
// css files
import './css/Navbar.css';
import './css/CallToAction.css';
import './css/StepsToMake.css';
import './css/OurFeatures.css';
import './css/GuideUs.css';
import './css/AboutUs.css'
import "./css/ResumePage.css";
import '../src/css/sidebar.css';
import '../src/css/EducationForm.css';
import '../src/css/education-page.css';
// Components

function App() {
  return (
    <Router>
      <Navbar />
      {/* <FormData/> */}
      <Switch>
        <Route exact path="/">
          <CallToAction />
          <OurFeatures />
          <GuideUs />
          <About />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
        <Route exact path="/Resume">
          <Resume />
        </Route>
        <Route exact path="/StepsToMake">
          <StepsToMake />
        </Route>
        <Route exact path="/Form">
          <Form />
        </Route>
     
        <Route exact path="/Resource">
          <Resource />
        </Route>
        <Route exact path="/AboutUs">
          <About />
        </Route>
        <Route exact path="*">
          <Erropage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
