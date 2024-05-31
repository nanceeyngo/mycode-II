import React from "react";
import download1 from './download1.jpeg'
import download2 from './download2.jpeg'
import download3 from './download3.jpeg'
import download4 from './download4.jpeg'
import download5 from './download5.jpeg'
import download6 from './download6.jpeg'
import images7 from './images7.jpeg'
import images8 from './images8.jpeg'


function Userpage() { 
    return ( 
       <div> 
            <h1>Hey there! Kindly choose your preferred layout. </h1> 
            <div className="imgs">
              <img src={download1} alt="Sample 1"/>
              <img src={download2} alt="Sample 2"/>
              <img src={download3} alt="Sample 3"/>
              <img src={download4} alt="Sample 4"/>
              <img src={download5} alt="Sample 5"/>
              <img src={download6} alt="Sample 6"/>
              <img src={images7} alt="Sample 7"/>
              <img src={images8} alt="Sample 8"/>
              
            </div>
      </div> 
    ); 
} 
export default Userpage; 
