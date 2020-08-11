import React from "react";
import { Carousel } from "react-bootstrap";
import "./headline.css";

const Headline = (props) => {
  return (
    <Carousel className="sm-d-none">
      <Carousel.Item>
        <a
          href="https://www.nytimes.com/2019/01/03/movies/escape-room-review.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="d-block w-100"
            src="https://www.nytimes.com/images/2019/01/04/movies/04escape1/merlin_148555659_3efc434a-823e-4eed-a419-4386ca14f013-articleLarge.jpg"
            alt="‘Escape Room’ Review: Puzzle Your Way Out, or You’re Dead"
          />
        </a>
        <Carousel.Caption>
          <a
            href="https://www.nytimes.com/2019/01/03/movies/escape-room-review.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>‘Escape Room’ Review</h4>
            <p>Puzzle Your Way Out, or You're Dead.</p>
          </a>
        </Carousel.Caption> 
      </Carousel.Item>

      <Carousel.Item>
        <a
          href="https://www.nytimes.com/2019/01/02/science/far-side-moon.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="d-block w-100"
            src="https://www.nytimes.com/images/2019/01/04/science/04FARSIDE-print/merlin_147822009_de28dea0-1cd9-42c5-a43d-6d502e6d9b10-articleLarge.jpg"
            alt="Third slide"
          />
        </a>

        <Carousel.Caption>
          <a
            href="https://www.nytimes.com/2019/01/02/science/far-side-moon.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>The Far Side of the Moon</h4>
            <p>What China and the World Hope to Find</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <a
          href="https://www.nytimes.com/2019/01/04/sports/baseball/pitching-counts.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="d-block w-100"
            src="https://www.nytimes.com/images/2019/01/07/sports/07powell3/merlin_144636081_03f68b05-b54e-4490-b224-ed03fcb5af9e-articleLarge.jpg"
            alt="Third slide"
          />
        </a>

        <Carousel.Caption>
          <a
            href="https://www.nytimes.com/2019/01/04/sports/baseball/pitching-counts.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Deep in Winter</h4>
            <p>Let’s Discuss the Stifling of Starting Pitchers</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
};

export default Headline;
