import React, {useState, useEffect} from 'react';
import ProgressBar from './ProgressBar';
import Tooltip from '@mui/material/Tooltip';


function MainPage() { 

  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => 
    {
      const scrollPosition = window.scrollY;

      const threshold = 1;

      setScrolled(scrollPosition > threshold);
    }

    window.addEventListener('scroll', handleScroll);

    return () => 
    {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  


  const css = `
  body, html {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
  .Image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  .Image img {
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-top: -380px;
  }
  

  .GitHub img {
    position: absolute; 
    width: 75px;
    height: 75px;
    bottom: 190px; /* Adjust as needed */
    left: 45%;
    transform: translateX(-50%);
  }

  .GitHub:hover
  {
    cursor: pointer;
  }

  .LinkedIn img
  {
    position: absolute; 
    width: 95px;
    height: 95px;
    bottom: 175px; /* Adjust as needed */
    left: 55%;
    transform: translateX(-50%);
  }

  .LinkedIn:hover
  {
    cursor: pointer;
  }

  .scroll img {
    // display: ${scrolled ? 'none' : 'block'};
    position: absolute;
    top: 90%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

    .Introduction{
      text-align: center;
      position: absolute;
      top: 57%;
      left: 25%;
      margin-bottom: 64px;
      fontFamily: 'Monaco';
    }
    .text{
      position: absolute;
      top: 57%;
      left: 75%;
      inline-size: 1000px;
    }

    .header {
      position: absolute;
      transform: translate(32%, 900%);
      font-size: 32px; 
      font-family: 'Times New Roman, serif';
      color: black;
    }
    

    .giphy1 
    {
      position:absolute;
      top: 135%;
      left: 0%;
    }

    .Quotation
    {
      position: absolute;
      display: block;
      top: 190%;
      left: 45%;
      font-size: 40px;
      font-family: 'Times New Roman, serif';
    }

    .Contact
    {
      position: absolute;
      display: block;
      top: 300%;
      left: 45%;
      font-size: 40px;
      font-family: 'Times New Roman, serif';
    }

    


  `;

  return (
    <div>
      <style>{css}</style>
      <div className = "Image">
        <img src="enhanced.jpg" alt="React Image" />
      </div>
      <div className='Introduction'>
        {/* <p className = "text">
          I'm Omer Mohiuddin, a Junior Developer at Ericsson, blending my technical expertise and creativity to craft innovative solutions at the intersection of technology and data. With a solid foundation in Computer Science, I actively contribute to cutting-edge projects, demonstrating my adaptability, enthusiasm, and a passion for continuous learning in software development and data analysis.
        </p> */}
      </div>
      <div className = "scroll">
        <img id='ScrollImg' src="https://assets-v2.lottiefiles.com/a/2615b546-118b-11ee-848e-df904a9344f9/OqwzToHNJX.gif" alt="Scroll Image"  />
      </div>
      <div className = "GitHub">
        <img src = "https://cdn-icons-png.flaticon.com/512/25/25231.png" onClick = {() => window.location.href = 'https://github.com/omerty'}></img>
      </div>
      <div className = "LinkedIn">
        <img src = "https://static.vecteezy.com/system/resources/previews/023/986/900/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" onClick = {() => window.location.href = 'https://www.linkedin.com/in/omer-mohiuddin-5a1376204/'}></img>
      </div>



      <div className = "WhatId">
        <h2 className = "header">Recent Work</h2>
          <div className = "boxStyle"></div>  
          <div className = "Contact"> Contact Me </div>
      </div>
    </div>
  );
}

export default MainPage;
