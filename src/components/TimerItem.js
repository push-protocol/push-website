import React from "react";

import styled, { css } from 'styled-components';
import { Item, ItemH, Span, Anchor, Image } from 'components/SharedStyling';

import countdown from 'config/countdown';

import { AiFillHeart } from 'react-icons/ai';

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
    if (timeRemaining == 0) {
      const now = Date.now() / 1000; // Unix timestamp in milliseconds to seconds
      setTimeRemaining(countdown.countdownEpoch - now);
    }

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
    <Item margin="10px 0px 20px 0px" align="flex-start">
      <ItemH direction="row" margin="0px 0px 0px 0px" padding="15px 15px" bg="transparent" radius="8px" overflow="hidden" minWidth="auto">
        <Item minWidth="auto" margin="0px 5px 0px -10px" flex="initial">
          <AiFillHeart size={20} color="#e20880"/>
        </Item>

        <Item minWidth="auto" margin="0px 0px 0px 5px">
          <Span color="#fff" self="flex-start" textTransform="uppercase" size="0.8em" spacing="0.2em" color="#fff">$PUSH Token Address</Span>
          <Span color="#fff" self="flex-start" weight="600" size="0.8em" spacing="0.2em" color="#fff">0xf418588522d5dd018b425E472991E52EBBeEEEEE</Span>
        </Item>
      </ItemH>

      <ItemH style={{maxWidth: "403px", justifyContent: "flex-start"}} margin="0px 0px 20px 0px" size="3em">
        <Anchor
          title="Trade $PUSH on Huobi"
          href="https://www.huobi.com/en-us/exchange/push_usdt"
          target="_blank"
          bg="transparent"
          width="40px"
          radius="12px"

        >
          <Image src="./listings/huobi.png" srcSet="./listings/huobi@2x.png 2x, ./listings/huobi@3x.png 3x" />
        </Anchor>

        <Anchor
          title="Trade $PUSH on Kucoin"
          href="https://trade.kucoin.com/PUSH-USDT"
          target="_blank"
          bg="transparent"
          width="40px"
          radius="12px"

        >
          <Image src="./listings/kucoin.png" srcSet="./listings/kucoin@2x.png 2x, ./listings/kucoin@3x.png 3x" />
        </Anchor>

        <Anchor
          title="Trade $PUSH on Gate.io"
          href="https://www.gate.io/trade/push_usdt"
          target="_blank"
          bg="transparent"
          width="40px"
          radius="12px"
        >
          <Image src="./listings/gateio.png" srcSet="./listings/gateio@2x.png 2x, ./listings/gateio@3x.png 3x" />
        </Anchor>

        <Anchor
          title="Trade $PUSH on WazirX"
          href="https://wazirx.com/exchange/PUSH-USDT"
          target="_blank"
          bg="transparent"
          width="40px"
          radius="12px"
        >
          <Image src="./listings/wazirx.png" srcSet="./listings/wazirx@2x.png 2x, ./listings/wazirx@3x.png 3x" />
        </Anchor>

        <Anchor
          title="Trade $PUSH on Zebpay"
          href="https://zebpay.com"
          target="_blank"
          bg="transparent"
          width="40px"
          radius="12px"
        >
          <Image src="./listings/zebpay.png" srcSet="./listings/zebpay@2x.png 2x, ./listings/zebpay@3x.png 3x" />
        </Anchor>

        <Anchor
          title="Trade $PUSH on MEXC (MXC)"
          href="https://www.mexc.com/exchange/PUSH_USDT"
          target="_blank"
          bg="transparent"
          width="40px"
          radius="12px"
        >
          <Image src="./listings/mexc.png" srcSet="./listings/mexc@2x.png 2x, ./listings/mexc@3x.png 3x" />
        </Anchor>

        <Anchor
          title="Trade $PUSH on Uniswap"
          href="https://app.uniswap.org/#/swap?inputCurrency=0xf418588522d5dd018b425e472991e52ebbeeeeee"
          target="_blank"
          bg="transparent"
          width="40px"
          radius="12px"
        >
          <Image src="./listings/uniswap.png" srcSet="./listings/uniswap@2x.png 2x, ./listings/uniswap@3x.png 3x" />
        </Anchor>

        <Anchor
          title="Trade $PUSH on Coindcx"
          href="https://coindcx.com/trade/PUSHUSDT"
          target="_blank"
          bg="transparent"
          width="40px"
          radius="12px"
        >
          <Image src="./listings/coindcx.png" srcSet="./listings/coindcx@2x.png 2x, ./listings/coindcx@3x.png 3x" />
        </Anchor>

        <Anchor
          title="Trade $PUSH on BitBns"
          href="https://bitbns.com/trade/#/push"
          target="_blank"
          bg="transparent"
          width="40px"
          radius="12px"
        >
          <Image src="./listings/bitbns.png" srcSet="./listings/bitbns@2x.png 2x, ./listings/bitbns@3x.png 3x" />
        </Anchor>
      </ItemH>

      <Item padding="15px 15px" bg="#000" flex="inital" radius="8px" overflow="hidden">
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

        {countdown.showListing &&
          <></>
        }

        {countdown.button == true &&
          <>
            <Anchor
              href={`${countdown.href}`}
              title={`${countdown.title}`}
              target="_blank"
              bg="#e20880"
              border
              margin="10px -15px -15px -15px"
              self="stretch"
            >
              {countdown.buttonText}
            </Anchor>
          </>
        }
      </Item>
    </Item>
  );
}

// css styles
const Container = styled.div`

`

// Export Default
export default TimerItem;
