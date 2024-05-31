import React from "react";
import { Link } from "react-router-dom";

function About() { 
    return ( 
       <div> 
            <h1> Hey user!</h1> 
            <p>SMAT CEEV is a Graphics Design Enterprise committed to bringing
              your dream CV to life. Go to <Link className="lnk" to="/">The Home Page</Link> for more info.
            </p>
      </div> 
    ); 
} 
export default About;