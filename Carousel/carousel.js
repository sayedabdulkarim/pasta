import React, { Component } from 'react'

import img1 from '../images/one.png'
import img2 from '../images/two.png'
import img3 from '../images/three.png'

import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';

import About from './About/About'

export default class Carousel extends Component {
  render() {
    const CarouselUI = ({ position, total, handleClick, children }) => (
      <Container>
        <Children>
          {children}
          <Arrow onClick={handleClick} data-position={position - 1}><i style={{color: 'grey', 'border': 'none'}} className="fas fa-chevron-left"></i></Arrow>
          <Arrow right onClick={handleClick} data-position={position + 1}><i style={{color: 'grey', 'border': 'none'}} className="fas fa-chevron-right"></i></Arrow>
        </Children>
        <Dots>
          {Array(...Array(total)).map( (val, index) =>
            <Dot key={index} onClick={handleClick} data-position={index}>
              {index === position ? '● ' : '○ ' }
            </Dot>
          )}
        </Dots>
      </Container>
    );
    const Carousel = makeCarousel(CarouselUI);

    return (
      <React.Fragment>
          <Carousel>
              <Slide right>
                <div>
                  <img src={img1} alt="avatar"/>
                </div>
              </Slide>
              <Slide right>
                <div>
                  <img src={img2} alt="avatar"/>
                </div>
              </Slide>
              <Slide right>
                <div>
                  <img src={img3} alt="avatar"/>
                </div>
              </Slide>
          </Carousel>
          <About />
      </React.Fragment>
    )
  }
}

const width = '100%', height='600px';

const Container = styled.div`
  // z-index: 100;
  text-align: center;
  // margin-Top: 50px;
  // border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: ${width};
`;
const Children  = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;