import React from "react";
import { Carousel } from "react-bootstrap";
import "./headline.css";


const MdHeadline = () => {
  return (
    <div className="brick-headline d-none sm-d-block">
      <div className="top-area">
        <div className="main-news">
          <Carousel>
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
                  href="https://www.nytimes.com/2019/01/03/movies/escape-room-review.html"
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
                  href="https://www.nytimes.com/2019/01/03/movies/escape-room-review.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Deep in Winter</h4>
                  <p>Let’s Discuss the Stifling of Starting Pitchers</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="secondary-news">
          <div className="news position-relative">
            <a href="https://www.nytimes.com/2019/01/02/movies/golden-globes-predictions.html">
              <div className="cover">
                <div className="cover-title">
                  2019 Golden Globes Predictions
                  <p className="subtitle">Which Movies Will Win?</p>
                </div>
              </div>
              <img
                className=""
                src="https://www.nytimes.com/images/2019/01/03/arts/03carpetbagger1/merlin_144555141_6522895f-1ea1-4a7c-b3ab-7d5818faaf09-articleLarge.jpg"
                alt="headline-pic"
              />
            </a>
          </div>
          <div className="news position-relative">
            <a href="https://www.nytimes.com/2019/01/03/sports/patrick-ewing-alonzo-mourning-georgetown.html">
              <div className="cover">
                <div className="cover-title">
                  A Mighty Tree Grows in Georgetown.
                  <p className="subtitle">
                    It Belongs to Patrick Ewing and Alonzo Mourning.
                  </p>
                </div>
              </div>
              <img
                className=""
                src="https://www.nytimes.com/images/2019/01/05/sports/00araton-ewing3/merlin_148515699_ef0875e8-7075-4605-aa01-ab9e36a6719f-articleLarge.jpg"
                alt="headline-pic"
              />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-area">
        <div className="news position-relative">
          <a href="https://www.nytimes.com/2019/01/03/business/dealbook/apple-china-slowdown-markets.html">
            <div className="cover">
              <div className="cover-title">
                DealBook Briefing
                <p className="subtitle">
                  Apple’s Struggles Add to Uncertainty in Markets.
                </p>
              </div>
            </div>
            <img
              className=""
              src="https://www.nytimes.com/images/2019/01/03/business/03dbapple/merlin_129549464_400b3113-00ac-4308-8c3c-ce140989fcc5-articleLarge.jpg"
              alt="headline-pic"
            />
          </a>
        </div>
        <div className="news position-relative">
          <a href="https://www.nytimes.com/2019/01/01/science/watson-dna-genetics-race.html">
            <div className="cover">
              <div className="cover-title">
                James Watson Had a Chance to Salvage His Reputation on Race.
                <p className="subtitle">He Made Things Worse.</p>
              </div>
            </div>
            <img
              className=""
              src="https://www.nytimes.com/images/2019/01/03/science/01SCI-WATSON1/01SCI-WATSON1-articleLarge.jpg"
              alt="headline-pic"
            />
          </a>
        </div>
        <div className="news position-relative">
          <a href="https://www.nytimes.com/2019/01/03/movies/rust-creek-review.html">
            <div className="cover">
              <div className="cover-title">
                'Rust Creek' review : A Woman Is Stranded in the Backwoods of
                Kentucky.
                <p className="subtitle">What Could Go Wrong?</p>
              </div>
            </div>
            <img
              className=""
              src="https://www.nytimes.com/images/2019/01/02/arts/rustcreek1/rustcreek1-articleLarge.jpg"
              alt="headline-pic"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MdHeadline;
