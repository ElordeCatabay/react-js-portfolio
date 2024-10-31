import React from 'react';
import cinemaworld from "../portfolio/cinemaworld.jpg";
import swifty from "../portfolio/swifty.png";
import foodordering from "../portfolio/foodordering.png";
import './Portfolio.css'; // Import the CSS file

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cinemaworld,
      description: "I did this project in my 3rd year. I have honed my knowledge of different programming languages."
    },
    {
      id: 2,
      src: swifty,
      description: "I did this project in my 3rd year. I have honed my knowledge of different programming languages."
    },
    {
      id: 3,
      src: foodordering,
      description: "I did this project in my 3rd year. I have honed my knowledge of different programming languages."
    },
  ];

  return (
    <div name="portfolio" className="portfolio-container">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="portfolio-title">Portfolio</p>
          <p className="portfolio-subtitle">Check out some of my work right here</p>
        </div>

        <div className="portfolio-grid">
          {portfolios.map(({ id, src, description }) => (
            <div key={id} className="portfolio-item">
              <img 
                src={src} 
                alt={`Portfolio project ${id}`} 
                className="portfolio-image"
              />
              <div className="flex flex-col items-center justify-center p-4">
                <button className="portfolio-button">
                  {description}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Portfolio;
