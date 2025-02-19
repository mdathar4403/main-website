/* eslint-disable prettier/prettier */
import React from 'react';
import './AboutUs.css';
import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';

function AboutUs() {
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  if (inViewport) {
    document.getElementsByClassName('square1')[0].classList.add('hover1');
    document.getElementsByClassName('square2')[0].classList.add('hover2');
  } else {
    if (document.getElementsByClassName('hover1')[0]) {
      document.getElementsByClassName('square1')[0].classList.remove('hover1');
      document.getElementsByClassName('square2')[0].classList.remove('hover2');
    }
  }

  return (
    <>
      <div className="contain">
        <div className="head">
          <div className="about-head">
            <h1>ABOUT US</h1>
          </div>
          <div className="base">
            <div className="base1"></div>
            <div className="base2"></div>
            <div className="base3"></div>
            <div className="base4"></div>
          </div>
        </div>
        <div className="main-box">
          <div className="box">
            <div className="content-box">
              <h3>ELECTRONICS ENGINEERING SOCIETY</h3>
              <div className="content">
                <p>
                  The Electronics Engineering Society (EES) is the departmental society of the Department of Electronics Engineering (ECE) of The Indian Institute of Technology, Varanasi (IIT BHU). EES has been organizing its annual techno-management fest, Udyam, for over a decade. It also organises the departmental Sports Event, Mashal, and Cultural Event, Udgam. Through these events, the EES
                  aims to provide practical and holistic interaction and learning to all its event participants.
                </p>
              </div>
            </div>
            <div className="squares">
              <div className="square1"></div>
              <div className="square2"></div>
            </div>
          </div>
          <div className="dots">
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot" ref={myRef}></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
