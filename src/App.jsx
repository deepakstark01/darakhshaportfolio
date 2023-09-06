import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { GiStairsGoal } from "react-icons/gi";
import './prof.css';

const GoodNight = () => {
  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(false);
  const [keywords, setKeywords] = useState(['nature', 'sky', 'planet', 'galaxy']);
  const [randomIndex, setRandomIndex] = useState(0);
  const currentTime = new Date().getUTCHours() + 5.5;
    let greetings;
    if (currentTime >= 0 && currentTime < 12) {
      greetings = 'Good morning ';
      
    } else if (currentTime >= 12 && currentTime < 17) {
      greetings = 'Good afternoon';
     
    } else if (currentTime >= 17 && currentTime < 21) {
      greetings = 'Good evening';
      
    } else {
      greetings = 'Good night';
     
    }
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * keywords.length));
  }, []);
  
  const handleClick1 = () => {
    
    setShowButton1(false);
    setShowButton2(true);
  };

  const handleClick2 = () => {
    setShowButton2(false);
  };

  return (
<>  

    <div
      className="bg-dark text-black p-5"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(https://source.unsplash.com/1920x1080/?${keywords[randomIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.7,
        overflowY: 'scroll'
      }}
    >
      <h1 className='bg-light' style={{ fontSize: '30px', textAlign: 'center',position: 'absolute', top: '18%',display: showButton1 ? 'block' : 'none' }}>Welcome! {greetings}</h1>
      {showButton1 ? (
        <button className="btn btn-primary" style={{ fontSize: '22px' }} onClick={handleClick1}>
         click Here to see message
        </button>
      ) : (
          <div className='p-2' style={{ width: '100%', height: '100%' }}  > 
            
               <div  className="card bg-black  top-0 start-50 translate-middle-x" style={{ width: '20rem' }}>
     <div className="d-flex justify-content-center mt-2">
    <img className="card-img-top bg-light rounded-circle" style={{ width: '10rem', borderRadius: '10px', border: '5px solid skyblue' }} src="https://camo.githubusercontent.com/6d63eb381b28c6ab88ce15b6963bf4ec19426d70f8592d22a36dedf2f6c342f9/68747470733a2f2f746263646e2e74616c656e74627265772e636f6d2f636f6d70616e792f3337352f32313338382f636f6e74656e742f6769662d69636f6e2d312e676966" alt="..." />
  </div>
      <div className="card-body bg-light ">
  <h5 className="card-title text-Black">About Darakhsha Rayen</h5>
  <hr className="my-2"/>
  <p className="  card-text">
    Darakhsha Rayen is born on January 1, 2002. From a young age, she has been fascinated with machines and technology. She excelled academically, scoring 91% in her 10th standard exams. In addition to her interest in technology, Darakhsha also enjoys playing sports such as badminton and kho-kho. She is currently pursuing a B.Tech in Computer Science at FG Institute of Technology. 
    <br/><br/>
    Some of her notable achievements and interests include:
    <ul>
      <li>Participating in zonal level kho-kho competitions while in college</li>
      <li>Participating in coding contests</li>
      <li>Scoring 91% in her 10th standard exams</li>
    </ul>
  </p>
  <hr className="my-1"/>
</div>

         <ul className="list-group list-group-flush">
  <li className="d-flex justify-content-center list-group-item">
    <a className="list-group-item" href="https://github.com/fiza0786"><AiFillGithub /> Github</a>
    <a className="list-group-item" href="https://www.linkedin.com/in/darakhsha-rayen-a81a33222/"><SiLinkedin /> Linkedin</a>
    <a className="list-group-item" href="https://leetcode.com/darakhsha11/"><SiLeetcode /> Leetcode</a>
  </li>
</ul>


      <div className="card-body bg-light">
          <p className="list-group-item " href="https://leetcode.com/darakhsha11/"><GiStairsGoal/>
           I want to do MAANG (Meta Facebook, Amazon, Apple, Netflix, and Google) you can see below course
        </p>
        
      </div>
    </div>
            
          </div>
          
          
    
      
      )}
    </div>  </>
  );
};
export default GoodNight;