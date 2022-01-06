import React from "react";
import champions from "./images/champions.png";
import nominee from "./images/nominee.png";
import delegatee from "./images/delegatee.png";
import holder from "./images/holder.png";

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
        <h1>PUSH DELEGATEE</h1>
        <h2>Hold at least 75k delegated $PUSH</h2>
        <h2>PUSH holders can delegate votes to them</h2>
        <h2>Can vote and submit proposals on snapshot</h2>
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
        <h1>PUSH NOMINEE</h1>
        <h2>Self nominate</h2>
        <h2>PUSH holders can delegate votes to them</h2>
        <h2>Can vote and submit proposals on snapshot (depending on the nnumber of delegated votes)</h2>
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
        <h1>PUSH CHAMPIONS</h1>
        <h2>COMMUNITY CHAMPIONS</h2>
        <h2>TEAM CHAMPIONS</h2>
        <h2>ELECTED CHAMPIONS</h2>
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
        <h1>PUSH Holders</h1>
        <h2>Can delegate votes (to themselves or PUSH Delegatees)</h2>
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

export default Circle;
