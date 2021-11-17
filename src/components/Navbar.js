import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        
        // <div className="navbar">
        //             <li><Link to="/Resume"> <span>Resume</span> </Link></li>
        //                 <li><Link to ="/Resource">  <span>Resource</span></Link></li>
        //                 <li><Link  to ="/#"> <span>About us</span> </Link></li>
        //                 <li><a href="/#">  <span className="log-in">Log In</span> </a></li>
        // </div>


  <div className="nav-container">
            <div className="navbar">
                <div>
                   {/* <Logo/> */}
                </div>
                <div className="navbar-links">
                    <ul>
                         <li><Link to="/StepsToMake"> <span>Resume</span> </Link></li>
                      <li><Link to ="/Resource">  <span>Resource</span></Link></li>
                     <li><Link  to ="/#"> <span>About us</span> </Link></li>
              <li><a href="/#">  <span className="log-in">Log In</span> </a></li>
                       
                </ul>

                </div>
                
     </div>
      </div>
        
    );
}
 
export default Navbar;