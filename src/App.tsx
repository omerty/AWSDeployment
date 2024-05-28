import React from 'react';
import ButtonAppBar from './ToolBar';
import MainPage from './MainPage';
import { StrictMode } from 'react';
import TypeWriter from './TypeWriter';
import { StyledEngineProvider } from '@mui/material/styles';
import Box from './BoxText';
import GitHubPage from './GitHubPage';

function App() {
  let css = `
  html, body {
    background-color: #dae8de;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  body {
    background-color: #dae8de;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #dae8de;
    pointer-events: none;
    z-index: -1;
  }
  
    .Introduction { 
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `;

  return (
    <StrictMode>
      <style>{css}</style>
      <div
        style={{
          position: 'absolute',
          top: '40%', // Adjust as needed
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ 
          fontSize: '48px', 
          color: '#31aaf5', 
          margin: '0', 
          fontFamily: 'Arial, sans-serif',
          marginTop: 210
        }}>
          Hi, I'm
        </h1>
        <h1 style={{ 
          fontSize: '48px', 
          color: '#31aaf5', 
          margin: '0', 
          fontFamily: 'Arial, sans-serif',
        }}>
          <TypeWriter />
        </h1>
      </div>
      <StyledEngineProvider injectFirst>
        <ButtonAppBar />
        <MainPage />
        <GitHubPage/>
      </StyledEngineProvider>
    </StrictMode>
  );
}

export default App;
