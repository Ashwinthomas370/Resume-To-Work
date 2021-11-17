import { Link } from 'react-router-dom';

const StepsToMake = () => {
    return (
      <div className="StepsToMake-Container">
        <h1 className="StepsToMake-Heading">
          3 steps to make a resume that will land jobs:
        </h1>
        <p className="StepsToMake-p">
          Pick a professional template designed by HR pros
        </p>
        <p className="StepsToMake-p">
          Write your resume in 5 minutes using step-by-step tips
        </p>
        <p className="StepsToMake-p"> Customize the design with a few clicks </p>
        <div >
          <button className="StepsToMake-btn" >   <Link to ="/Resume">  Make Your Resume</Link></button>

        </div>
      </div>
      
      
    );
}

export default StepsToMake
