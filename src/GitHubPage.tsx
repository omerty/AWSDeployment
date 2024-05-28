import React from 'react';
import Tooltip from '@mui/material/Tooltip';
// import { Link } from 'react-router-dom'
import DataScience1 from './DataScience1';


function GitHubPage() {
    const css = `
    .BitCoin img {
        position: absolute; 
        width: 600px;
        height: 400px;
        bottom: -600px; /* Adjust as needed */
        left: 20%;
        transform: translateX(-50%);
    }

    .BitCoin:hover {
        cursor: pointer;
    }

    .Header1 {
      text-align: center;
      position: absolute;
      top: 115%;
      left: 2%;
      margin-bottom: 34px;
      fontFamily: 'Monaco';
      font-size: 30px;
      color: black;
    }

    .NetflixClone img {
        position: absolute; 
        width: 600px;
        height: 400px;
        bottom: -600px; /* Adjust as needed */
        left: 80%;
        transform: translateX(-50%);
    }

    .NetflixClone:hover {
        cursor: pointer;
    }

    .Header2 {
      text-align: center;
      position: absolute;
      top: 115%;
      left: 66%;
      margin-bottom: 34px;
      fontFamily: 'Monaco';
      font-size: 30px;
      color: black;
    }
    `;

    return (
        <div>
            <style>{css}</style>

            <div className="BitCoin">
                <Tooltip  title="Click to explore more about Bitcoin">
                    <a href='/DataScience1'target="_blank" rel="noopener noreferrer">
                        <img id='BitCoin1' src="StockMarketImg.png" alt="Scroll Image" />
                    </a>                
                </Tooltip>
                
                <a  href="https://www.google.com" className='Header1'>Exploring Bitcoin Currency Data Science Project</a >
            </div>
            <div className="NetflixClone">
                <Tooltip  title="Click to explore more about NetFlix CLone">
                    <a href='/NetflixClone'target="_blank" rel="noopener noreferrer">
                        <img id='NetflixClone1' src="NetflixClone.png" alt="Scroll Image" />
                    </a>                
                </Tooltip>
                <a  href="https://www.google.com" className='Header2'>Netflix Clone Front-End Development</a >
            </div>
        </div>
    );
}

export default GitHubPage;
