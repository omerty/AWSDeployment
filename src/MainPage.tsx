import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Tooltip from '@mui/material/Tooltip';
import { useCarousel } from 'use-carousel-hook';

function MainPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 1;
      setScrolled(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { ref, previous, next, setCurrent, reset } = useCarousel<HTMLUListElement>();

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
    width: 170px;
    height: 170px;
    bottom: 230px; /* Adjust as needed */
    left: 45%;
    transform: translateX(-50%);
  }

  .GitHub:hover {
    cursor: pointer;
  }

  .LinkedIn img {
    position: absolute;
    width: 75px;
    height: 75px;
    bottom: 275px; /* Adjust as needed */
    left: 55%;
    transform: translateX(-50%);
  }

  .LinkedIn:hover {
    cursor: pointer;
  }

  .scroll img {
    position: absolute;
    top: 90%;
    left: 50%;
    width: 300px;
    height: 200px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  .Introduction {
    text-align: center;
    position: absolute;
    top: 57%;
    left: 25%;
    margin-bottom: 64px;
    fontFamily: 'Monaco';
  }

  .text {
    position: absolute;
    top: 57%;
    left: 75%;
    inline-size: 1000px;
  }

  .header {
    position: absolute;
    transform: translate(50%, 700%);
    font-size: 42px;
    font-family: 'Times New Roman, serif';
    color: white;
  }

  .languages {
    position: absolute;
    font-size: 42px;
    font-family: 'Times New Roman, serif';
    color: white;
    left: 853px;
    bottom: -1400px;
  }

  .giphy1 {
    position: absolute;
    top: 135%;
    left: 0%;
  }

  .Quotation {
    position: absolute;
    display: block;
    top: 190%;
    left: 45%;
    font-size: 40px;
    font-family: 'Times New Roman, serif';
  }

  .slideshow {
    position: absolute;
    text-align: center;
    margin-top: 1900px;
    margin-left: -250px;
  }

  .carousel__list {
    display: flex;
    list-style: none;
    padding: 0;
    overflow: hidden;
    position: relative;
    width: 75vw;
    margin: 0 auto;
    max-width: 50rem;
  }

  .carousel__item {
    flex: 0 0 auto;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .carousel__item img {
    width: 600px; /* Adjust as needed */
    height: 400px; /* Adjust as needed */
    object-fit: cover; /* Ensure images cover the entire area */
  }

  .arrow-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    filter: invert(1);
  }

  .arrow-button img {
    width: 50px;
    height: 50px;
  }

  .arrow-left {
    left: -60px; /* Adjust as needed */
  }

  .arrow-right {
    right: -60px; /* Adjust as needed */
  }
  `;

  return (
    <div>
      <style>{css}</style>
      <div className="Image">
        <img src="enhanced.jpg" alt="React Image" />
      </div>
      <div className="Introduction">
        {/* <p className="text">
          I'm Omer Mohiuddin, a Junior Developer at Ericsson, blending my technical expertise and creativity to craft innovative solutions at the intersection of technology and data. With a solid foundation in Computer Science, I actively contribute to cutting-edge projects, demonstrating my adaptability, enthusiasm, and a passion for continuous learning in software development and data analysis.
        </p> */}
      </div>
      <div className="scroll">
        <img id="ScrollImg" src="https://method-1.com/wp-content/uploads/2021/03/Scroll-Down-white.gif" alt="Scroll Image" />
      </div>
      <div className="GitHub">
        <img
          src="https://png.pngtree.com/png-vector/20220923/ourmid/pngtree-github-logo-icon-png-image_6214544.png"
          onClick={() => window.location.href = 'https://github.com/omerty'}
          alt="GitHub"
        />
      </div>
      <div className="LinkedIn">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
          onClick={() => window.location.href = 'https://www.linkedin.com/in/omer-mohiuddin-5a1376204/'}
          alt="LinkedIn"
        />
      </div>

      <div className="WhatId">
        <h2 className="header">Projects</h2>
        <div className="boxStyle"></div>
        <h3 className="languages">Languages</h3>
        <div className="slideshow">
          <button className="arrow-button arrow-left" onClick={() => previous()}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-left.png" alt="Previous" />
          </button>
          <button className="arrow-button arrow-right" onClick={() => next()}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png" alt="Next" />
          </button>
          <ul ref={ref} className="carousel__list">
            <li className="carousel__item">
              <img src="https://devblogs.microsoft.com/python/wp-content/uploads/sites/12/2018/08/pythonfeature.png" alt="Image 1" />
            </li>
            <li className="carousel__item">
              <img src="https://www.trainingint.com/wp-content/uploads/java-image.jpg" alt="Image 2" />
            </li>
            <li className="carousel__item">
              <img src="https://miro.medium.com/v2/resize:fit:800/1*bthRXJ_FBspSEijOWIRM2A.png" alt="Image 3" />
            </li>
            <li className="carousel__item">
              <img src="https://miro.medium.com/v2/resize:fit:814/1*l_fkDG3AvqcXwsFm5OeSfw.png" alt="Image 4" />
            </li>
            <li className="carousel__item">
              <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="Image 5" />
            </li>
            <li className="carousel__item">
              <img src="https://miro.medium.com/v2/resize:fit:1100/1*f2i47G95nVCx71KzM1iXlg.png" alt="Image 6" />
            </li>
            <li className="carousel__item">
              <img src="https://i.pinimg.com/736x/5f/d4/99/5fd499d048f90f0fb6b93cf5b8c7ed2a.jpg" alt="Image 7" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
