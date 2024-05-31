import React from 'react'; 
import { Route, Routes,} from "react-router-dom" 

import Header from "./Component/Header"; 
import Homepage from "./Pages/Homepage" 
import Userpage from "./Pages/Userpage" 
import About from "./Pages/About" 
export default function App() { 
   return ( 
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/userpage" element={<Userpage />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </div>
   );
  }

  









//       <div className="App"> 
      
//         <Header />
//           <div>
//         <BrowserRouter>
        
        
//         <Switch>
//             <Route exact path="/">
//               <Homepage />
//               </Route>
            
//               <Route path="/Userpage">
//               <Userpage />
//               </Route>

//               <Route path="/About">
//               <About />
//               </Route>


//             <Route path="/Homepage" Pages={<Homepage/> } /> 
//             <Route path="/Userpage" Pages={<Userpage/> } /> 
//             <Route path="/About" Pages={<About/> } /> 
        
//       </Switch>
//         </BrowserRouter>
       
//           </div>
//            </div> 
// )} 


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// } */}
