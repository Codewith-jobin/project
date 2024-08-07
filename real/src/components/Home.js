// // import React, { useEffect, useState } from 'react'
// import "./Home.css"
// import Homein from './componentsin/Homein'
// import { useNavigate } from 'react-router-dom'

// function Home() {
//   const navigate=useNavigate()
 
  
    
//   const handleclick=(path)=>{
//         navigate(path)
//       }
    


   

//   return (
//     <div className='sidenav'>
//       <div className="options">REALzPace
//         <h1>Home</h1>
//         <h1 onClick={()=>handleclick("/homein")}>search</h1>
        
//         <h1 onClick={()=>handleclick("/connect")}>connections</h1>
//         <h1 onClick={()=>handleclick("/findings")} >findings</h1>
//         <h1 onClick={()=>handleclick("/news")} >news</h1>
//         <h1 onClick={()=>handleclick("/features")}>features</h1>
//         <h1 onClick={()=>handleclick("/profile")}>profile</h1>
//       </div>
//       <div id="centre">
//         <div id="periodic">
//           <div id="p1"> <button>yesterday</button></div>
//           <div id="p2"><button>today</button></div>
//           <div id="p3"><button>tommorow</button></div>
//         </div>

//         <div id="maincontent">
//           <div>post1</div>
//           <div>post2</div>
//           <div>post3</div>
//         </div>


//         <div id="adjust-timeline">
//         calender
//         </div>


//       </div>
      
//       </div>
      
//   )
// }

// export default Home
import React, { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleclick = (path) => {
    navigate(path);
  };

  // State to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Use effect to update time every second
  useEffect(() => {
  const timer=setInterval(()=>{
    setCurrentTime(new Date().toLocaleTimeString())
  },1000);
  return()=>clearInterval(timer)

  },[])
  
  
    

  return (
    <div className='container'>
      <div className='sidenav'>
        <h1>REALzPace</h1>
        <h2>Home</h2>
        <h2 onClick={() => handleclick("/search")}>Search</h2>
        <h2 onClick={() => handleclick("/connect")}>Connections</h2>
        <h2 onClick={() => handleclick("/findings")}>Findings</h2>
        <h2 onClick={() => handleclick("/news")}>News</h2>
        <h2 onClick={() => handleclick("/features")}>Features</h2>
        <h2 onClick={() => handleclick("/profile")}>Profile</h2>
      </div>
      <div className='main'>
        <div className='periodic'>
          <button>Yesterday</button>
          <button>Today</button>
          <button>Tomorrow</button>
        </div>
        <div className='posts'>
          <div className='post'></div>
          <div className='post'></div>
          <div className='post'></div>
          <div className='post'></div>

        </div>
      </div>
      <div className='sidebar'>
        <div className='time'>{currentTime}</div>
        <div className='calendar'>Calendar Widget</div>
      </div>
    </div>
  );
}

export default Home;



