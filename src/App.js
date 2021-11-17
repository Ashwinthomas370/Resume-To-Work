import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CallToAction from './pages/CallToAction'
import Resume from './pages/Resume';
import Resource from './pages/Resource';
import About from './pages/Aboutus';
import StepsToMake from './pages/StepsToMake';
import OurFeatures from './pages/OurFeatures'
import GuideUs from './pages/GuideUs';
import CreatingResume from './pages/CreatingResume';
import Erropage from './pages/errorpage'
// css files
import './css/Navbar.css';
import './css/CallToAction.css';
import './css/StepsToMake.css';
import './css/OurFeatures.css';
import './css/GuideUs.css';
import './css/AboutUs.css'
// Components

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <CallToAction />
          <OurFeatures />
          <GuideUs/>
          <About />
        </Route>
        <Route exact path="/Resume">
          <Resume />
        </Route>
        <Route exact path="/StepsToMake">
          <StepsToMake />
        </Route>
        <Route exact path="/Resource">
          <Resource />
        </Route>
        <Route exact path="*" >
          <Erropage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
