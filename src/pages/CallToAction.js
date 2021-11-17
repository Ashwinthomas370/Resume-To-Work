import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
         <section className="call-to-action container-fluid">
        <div className="cta-container ">
          <h1 className="cta-heading">Simplifying job hunting</h1>
          <h4 className="cta-sub-heading">
            Create your professional resume in 5 minutes.
          </h4>
          <button className=" cta-btn">  < Link to ="/StepsToMake">CREATE RESUME</Link> </button>
          
        </div>
        {/* <ManSvg /> */}
      </section>
    )
}

export default CallToAction
