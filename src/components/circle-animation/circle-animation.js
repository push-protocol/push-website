import React from "react";
import champions from "./images/champions.png";
import nominee from "./images/nominee.png";
import delegatee from "./images/delegatee.png";
import holder from "./images/holder.png";
// import {Section, SectionFS,SectionHero, SectionFSHero, Content, Item, ItemH, A,LI,ItemBreak, WaveOuter, WaveInner, Arc, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField,DottedSection} from 'components/SharedStyling';

import styled, { css } from 'styled-components';

// import gsap from 'gsap';

// import logo from "./logo.svg";
import "./circle-animation.css";

const INCREMENT = 90;
const INTERVAL_DURATION = 2000; //this determines the time before the circles turn around
const CIRCLE_DURATION = 300; //just a buffer at which we want to start enlarging the circles before they get to their destination




const CIRCLE_DETAILS = [
  {
    color: "#35C5F3",
    class: "circle blue",
    image: delegatee,
    backgroundImage: delegatee,
    Text: () => (
      <div class="textCont">
        <H1E>PUSH DELEGATEE</H1E>
        <H2EU>Hold at least 75k delegated $PUSH</H2EU>
        <H2EU>PUSH holders can delegate votes to them</H2EU>
        <H2EU>Can vote and submit proposals on snapshot</H2EU>
      </div>
    ),
  },
  {
    color: "#E20880",
    class: "circle red",
    image: nominee,
    backgroundImage: nominee,
    Text: () => (
      <div class="textCont">
        <H1E>PUSH NOMINEE</H1E>
        <H2EU>Self nominate</H2EU>
        <H2EU>PUSH holders can delegate votes to them</H2EU>
        <H2EU>Can vote and submit proposals on snapshot (depending on the number of delegated votes)</H2EU>
      </div>
    ),
  },
  {
    color: "#000",
    class: "circle black",
    image: champions,
    backgroundImage: champions,
    Text: () => (
      <div class="textCont">
        <H1E>PUSH CHAMPIONS</H1E>
        <H2EU>COMMUNITY CHAMPIONS</H2EU>
        <H2EU>TEAM CHAMPIONS</H2EU>
        <H2EU>ELECTED CHAMPIONS</H2EU>
      </div>
    ),
  },
  {
    color: "#674C9F",
    class: "circle purple",
    image: holder,
    backgroundImage: holder,
    Text: () => (
      <div class="textCont">
        <H1E>PUSH Holders</H1E>
        <H2EU>Can delegate votes (to themselves or PUSH Delegatees)</H2EU>
        {/* <h2>PUSH holders can delegate votes to them</h2>
        <h2>Can vote and submit proposals on snapshot</h2> */}
      </div>
    ),
  },
];

function Circle() {
  const circleRef = React.useRef(null);
  const [rot, setRot] = React.useState(0);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRot((rot) => rot + INCREMENT);
      setTimeout(() => setActive((a) => (a + 1) % 4), CIRCLE_DURATION);
    }, INTERVAL_DURATION);

    return () => {
      clearInterval(interval);
    };
  });

  const isActive = (index) => index === active && "--active";
  const { Text } = CIRCLE_DETAILS[active];


  return (
    <div className="wrapper">
      <div
        style={{
          transform: `rotate(${rot}deg)`,
          backgroundColor: CIRCLE_DETAILS[active].color,
        }}
        ref={circleRef}
        className="container"
      >
        {CIRCLE_DETAILS.map((detail, index) => (
          <div className={detail.class} id={isActive(index)}>
            {isActive(index) && <img src={detail.image} />}
          </div>
        ))}
      </div>
      <div className="text-content">
        <img src={CIRCLE_DETAILS[active].backgroundImage} />
      </div>
      <div className="text-content">
        <Text />
      </div>
    </div>
  );
}



export const H2EU = styled.h2`
  color: ${props => props.color || '#ffffff'};
  font-weight: ${props => props.weight || 400};
  font-size: ${props => props.size || "1.5rem"};
  text-transform: ${props => props.textTransform || "inherit"};
  margin: ${props => props.margin || "20px 0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
  font-family: ${props => props.family || "'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${props => props.textAlign || "inherit"};
  @media(max-width: 600px)
  {
    margin-top: -10px;
    font-size: 1rem;
  }
  @media(min-width: 600px)
  {
    margin-top: 0px;
  }
`


export const H1E = styled.h1`
font-size: 2rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`

export default Circle;
