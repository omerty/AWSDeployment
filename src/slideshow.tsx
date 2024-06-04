import React, { useRef } from 'react';
import { useCarousel } from 'use-carousel-hook';
import ButtonAppBar from './ToolBar';


function Slideshow() {
  const { ref, previous, next } = useCarousel<HTMLUListElement>();


  const css = `
  body, html {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slideshow {
    position: relative; /* Add this line */
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
    left: -12vw;
  }

  .arrow-right {
    right: -6vw; /* Change this value to adjust the position */
  }
`;

  return (
    <div>
      <style>{css}</style>
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
  );
}

export default Slideshow;
