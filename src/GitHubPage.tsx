import React from 'react';
import Tooltip from '@mui/material/Tooltip';

function GitHubPage() {
    const css = `

    .BitCoin img {
        position: absolute; 
        width: 40vw; 
        height: 30vw; 
        bottom: -90vh; 
        left: 22%;
        transform: translateX(-50%);
        margin-top: 10vh;
    }

    .BitCoin:hover {
        cursor: pointer;
    }

    .Header1 {
      text-align: center;
      position: absolute;
      top: 115vh;
      left: 2%;
      margin-bottom: 3.4vh;
      margin-top: 2vh;
      font-family: 'Monaco';
      font-size: 2vw;
      color: white;
    }

    .NetflixClone img {
        position: absolute; 
        width: 40vw; 
        height: 30vw; 
        bottom: -90vh; 
        left: 78%;
        transform: translateX(-50%);
    }

    .NetflixClone:hover {
        cursor: pointer;
    }

    .Header2 {
      text-align: center;
      position: absolute;
      top: 115vh;
      left: 71%;
      margin-bottom: 2vh;
      margin-top: 2vh;
      font-family: 'Monaco';
      font-size: 2vw;
      color: white;
    }

    .MachineLearningChatBot img {
        position: absolute; 
        width: 40vw; 
        height: 30vw; 
        bottom: -175vh; 
        left: 22%;
        transform: translateX(-50%);
    }

    .MachineLearningChatBot:hover {
        cursor: pointer;
    }

    .Header3 {
        text-align: center;
        position: absolute;
        top: 200vh;
        left: 10%;
        margin-bottom: 3.4vh;
        margin-top: 2vh;
        font-family: 'Monaco';
        font-size: 2vw;
        color: white;
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
                <Tooltip title="Click to explore more about NetFlix Clone">
                    <a href="https://github.com/omerty/Netflix--Cloone-Beta-" target="_self">
                        <img id='NetflixClone1' src="/NetflixClone.png" alt="Scroll Image" />
                    </a>
                </Tooltip>
                <a href="https://github.com/omerty/Netflix--Cloone-Beta-" className='Header2' target="_blank" rel="noopener noreferrer">
                    Netflix Clone 
                </a>
            </div>
            <div className="MachineLearningChatBot">
                <Tooltip title="Click to explore more about Our Machine Learning ChatBot">
                    <a href="https://github.com/omerty/SimpleMachineLearning" target="_self">
                        <img id='MachineLearning1' src="/MachineLearningChatBot.png" alt="Scroll Image" />
                    </a>
                </Tooltip>
                <a href="https://github.com/omerty/SimpleMachineLearning" className='Header3' target="_blank" rel="noopener noreferrer">
                    Machine Learning Chat-Bot
                </a>
            </div>
        </div>
    );
}

export default GitHubPage;
