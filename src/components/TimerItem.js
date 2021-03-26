import React from "react";

import styled, { css } from 'styled-components';
import { Item, ItemH, Span, Anchor } from 'components/SharedStyling';

import countdown from 'config/countdown';

// Create Header
function TimerItem() {
  const [timeRemaining, setTimeRemaining] = React.useState(0);

  const [ticker, setTicker] = React.useState(-2);
  const [counter, setCounter] = React.useState(0);

  const [time, setTime] = React.useState({hours: '--', mins: '--', secs: '--'});

  const [hhTheme, setHHTheme] = React.useState("#fff");
  const [mmTheme, setMMTheme] = React.useState("#fff");
  const [ssTheme, setSSTheme] = React.useState("#fff");

  // For countdown
  React.useEffect(() => {
    const now = Date.now() / 1000; // Unix timestamp in milliseconds to seconds
    setTimeRemaining(countdown.countdownEpoch - now);

  }, [timeRemaining]);

  React.useEffect(() => {
    if (timeRemaining == 0) {
      return;
    }

    if (ticker != -2) {
      const timer = setTimeout(() => {
        setTicker(ticker - 1);

        if (ticker - 1 > -2 || !ticker) {
          calculateTimeLeft(ticker - 1);
        }
      }, 1000);
    }
    else {
      setTicker(timeRemaining);
    }

  }, [ticker, timeRemaining]);

  const calculateTimeLeft = (epochInSecs) => {
    if (epochInSecs > 0) {
      const hh = Math.floor((epochInSecs / (60 * 60))).toString();
      const mm = Math.floor((epochInSecs / 60) % 60).toString()
      const ss = Math.floor(epochInSecs % 60).toString()

      const hhf = hh.length < 2 ? (parseInt(hh) == 0 ? "00" : "0" + hh) : hh;
      const mmf = mm.length < 2 ? (parseInt(mm) == 0 ? "00" : "0" + mm) : mm;
      const ssf = ss.length < 2 ? (parseInt(ss) == 0 ? "00" : "0" + ss) : ss;

      setTime({
        hours: hhf,
        mins: mmf,
        secs: ssf
      });
    }
  }

  // to create blockies

  return (
    <Item margin="20px 0px" padding="15px 15px" bg="#000" flex="inital" radius="8px" overflow="hidden">
      <Item>
        <Span textAlign="center" textTransform="uppercase" size="0.8em" spacing="0.2em" color="#fff" flex="inherit">{countdown.title}</Span>
      </Item>

      {timeRemaining > 0 &&
        <ItemH size="3em">
          <Span color={hhTheme} weight="700" family="'Monstrat', Helvetica, sans-serif" margin="0px 5px">{time.hours}</Span>
          <Span color="#fff" weight="200">:</Span>
          <Span color={mmTheme} weight="700" family="'Monstrat', Helvetica, sans-serif" margin="0px 5px">{time.mins}</Span>
          <Span color="#fff" weight="200">:</Span>
          <Span color={ssTheme} weight="700" family="'Monstrat', Helvetica, sans-serif" margin="0px 5px">{time.secs}</Span>
        </ItemH>
      }

      {countdown.button == true &&
        <Anchor
          href={`${countdown.href}`}
          title={`${countdown.title}`}
          target="_blank"
          bg="#e20880"
          border
          margin="10px -15px -15px -15px"
        >
          {countdown.buttonText}
        </Anchor>
      }

    </Item>
  );
}

// css styles
const Container = styled.div`

`

// Export Default
export default TimerItem;
