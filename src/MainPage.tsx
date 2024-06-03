import React, { useState, useEffect } from 'react';
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
    justify-content: left;
    align-items: center;
    width: 500%;
    height: 100%;
  }

  .Image img {
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    margin-top: -38vh;
  }

  .GitHub img {
    position: absolute;
    width: 10vw;
    height: 10vw;
    bottom: 21vh;
    left: 45%;
    transform: translateX(-50%);
  }

  .GitHub:hover {
    cursor: pointer;
  }

  .LinkedIn img {
    position: absolute;
    width: 4.5vw;
    height: 4.5vw;
    bottom: 26.5vh;
    left: 55%;
    transform: translateX(-50%);
  }

  .LinkedIn:hover {
    cursor: pointer;
  }

  .scroll img {
    position: absolute;
    top: 92%;
    left: 50%;
    width: 20vw;
    height: 11vw;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  .Introduction {
    text-align: center;
    position: absolute;
    top: 57%;
    left: 25%;
    margin-bottom: 6.4vh;
    font-family: 'Monaco';
  }

  .text {
    position: absolute;
    top: 57%;
    left: 75%;
    inline-size: 100vw;
  }

  .header {
    position: absolute;
    font-size: 3vw;
    font-family: 'Times New Roman, serif';
    color: white;
    left: 50%;
    transform: translateX(-50%);
    bottom: -19vh; /* Adjust this value to control the vertical positioning */
  }

  .languages {
    position: absolute;
    font-size: 3vw;
    font-family: 'Times New Roman, serif';
    color: white;
    left: 50%;
    transform: translateX(-50%);
    bottom: -210vh; /* Adjust this value to control the vertical positioning */
  }

  .slideshow {
    position: absolute;
    bottom: -280vh; /* Adjust this value to control the vertical positioning */
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  .carousel__list {
    display: flex;
    list-style: none;
    padding: 0;
    overflow: hidden;
    position: relative;
    width: 50vw;
    margin: 0 auto;
  }

  .carousel__item {
    flex: 0 0 auto;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .carousel__item img {
    width: 42vw;
    height: 30vw;
    object-fit: cover;
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
    width: 5vw;
    height: 5vw;
  }

  .arrow-left {
    left: -6vw;
  }

  .arrow-right {
    right: -6vw;
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

