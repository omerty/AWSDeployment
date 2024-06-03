import React, { useRef } from 'react';
import { StrictMode } from 'react';
import ButtonAppBar from './ToolBar';
import MainPage from './MainPage';
import TypeWriter from './TypeWriter';
import { StyledEngineProvider } from '@mui/material/styles';
import GitHubPage from './GitHubPage';
import Chatbot from './chatbot';
import ContactMeBox from './ContactMe';
import Slideshow from './slideshow';

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const LanuageRef = useRef<HTMLDivElement>(null);

  let css = `
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
  }

  body {
    background-image: url("https://static.vecteezy.com/system/resources/previews/028/536/656/original/abstract-background-illustration-on-gradient-mesh-design-style-elegant-black-grey-colors-blend-suitable-for-website-wallpaper-digital-banner-decoration-backdrop-poster-free-vector.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 800vh; /* Use viewport height */
  }
  
  .Introduction {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .Contact{
    position: absolute;
    bottom: -340%; 
    left: 52.5%; 
  }

  .slideShow1
  {
    position: absolute;
    bottom: -285%; 
    left: 30%;
  }
  `;

  return (
    <StrictMode>
      <style>{css}</style>
      <StyledEngineProvider injectFirst>
        <ButtonAppBar projectsRef={projectsRef} contactRef={contactRef} LanuageRef={LanuageRef}/>
        <MainPage />
        <div ref={projectsRef}>
          <GitHubPage />
        </div>
        <Chatbot />
        <div
          style={{
            position: 'absolute',
            top: '45vh', // Adjust as needed, using viewport height
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <h1 style={{
            fontSize: '3vw', // Use viewport width for font size
            color: '#31aaf5',
            margin: '0',
            fontFamily: 'Arial, sans-serif',
            marginTop: '10vh' // Use viewport height for margin
          }}>
            Hi, I'm
          </h1>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '57vh', // Adjust as needed, using viewport height
            left: '49%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <h1 style={{
            fontSize: '3vw', // Use viewport width for font size
            color: '#31aaf5',
            margin: '0',
            fontFamily: 'Arial, sans-serif',
          }}>
            <TypeWriter />
          </h1>
        </div>
        <div className = "Contact" ref={contactRef}>
          <ContactMeBox />
        </div>
        <div className = "slideShow1" ref = {LanuageRef}>
          <Slideshow />
        </div>
      </StyledEngineProvider>
    </StrictMode>
  );
}

export default App;

