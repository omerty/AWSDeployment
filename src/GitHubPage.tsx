import React from 'react';
import Tooltip from '@mui/material/Tooltip';

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
      left: 4.5%;
      margin-bottom: 34px;
      font-family: 'Monaco';
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
      left: 67.5%;
      margin-bottom: 34px;
      font-family: 'Monaco';
      font-size: 30px;
      color: black;
    }

    .MachineLearningChatBot img {
        position: absolute; 
        width: 600px;
        height: 400px;
        bottom: -1200px; /* Adjust as needed */
        left: 20%;
        transform: translateX(-50%);
    }

    .MachineLearningChatBot:hover {
        cursor: pointer;
    }

    .Header3 {
        text-align: center;
        position: absolute;
        top: 179%;
        left: 10%;
        margin-bottom: 34px;
        font-family: 'Monaco';
        font-size: 30px;
        color: black;
    }
    `;

    return (
        <div>
            <style>{css}</style>

            <div className="BitCoin">
                <Tooltip title="Click to explore more about Bitcoin">
                    <a href="https://github.com/omerty/-Exploring-the-Bitcoin-Cryptocurrency-Market-DataCamp-project" target="_self">
                        <img id='BitCoin1' src="StockMarketImg.png" alt="Scroll Image" />
                    </a>
                </Tooltip>
                <a href="https://github.com/omerty/-Exploring-the-Bitcoin-Cryptocurrency-Market-DataCamp-project" className='Header1' target="_self">
                    Exploring Bitcoin Currency Data Science Project 
                </a>
            </div>
            <div className="NetflixClone">
                <Tooltip title="Click to explore more about NetFlix CLone">
                    <a href="https://github.com/omerty/Netflix--Cloone-Beta-" target="_self">
                        <img id='NetflixClone1' src="/NetflixClone.png" alt="Scroll Image" />
                    </a>
                </Tooltip>
                <a href="https://github.com/omerty/Netflix--Cloone-Beta-" className='Header2' target="_blank" rel="noopener noreferrer">
                    Netflix Clone Front-End Development
                </a>
            </div>
            <div className="MachineLearningChatBot">
                <Tooltip title="Click to explore more about Our Machine Learning ChatBot">
                    <a href="https://github.com/omerty/Netflix--Cloone-Beta-" target="_self">
                        <img id='MachineLearning1' src="/MachineLearningChatBot.png" alt="Scroll Image" />
                    </a>
                </Tooltip>
                <a href="https://github.com/omerty/Netflix--Cloone-Beta-" className='Header3' target="_blank" rel="noopener noreferrer">
                    Machine Learning Chat-Bot
                </a>
            </div>
        </div>
    );
}

export default GitHubPage;