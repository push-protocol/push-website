// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */
import React from 'react'
import styled from 'styled-components';

const ChannelItem = ({ channelProp }) => {
  const [channelObject, setChannelObject] = React.useState({});

    React.useEffect(() => {
        if (!channelProp) return;
        setChannelObject(channelProp);
      }, [channelProp]);

      console.log(channelObject)

  return (
    <Container>

        <ChannelLogo>
           <ChannelLogoImg src={`${channelObject.icon}`} />
        </ChannelLogo>
        
        <ChannelTitle><b>{channelObject.name}</b></ChannelTitle>

        <ChannelDesc>{channelObject.info}</ChannelDesc>

        <ChannelType><b>Infrastructure</b></ChannelType>
        
    </Container>
  )
}

const Container = styled.div`
    border: 1px solid #BAC4D6;
    border-radius: 38.5px;
    padding: 30px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

const ChannelLogo = styled.div`
    max-width: 100px;
    min-width: 32px;
    margin-bottom: 30px;
`;

const ChannelLogoImg = styled.img`
    object-fit: contain;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
`;

const ChannelTitle = styled.b`
    font-weight: 500;
    font-size: 22px;
    line-height: 110%;
    letter-spacing: -0.03em;
    color: #121315;
`;

const ChannelDesc = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    color: #303C5E;
`;

const ChannelType = styled.div`
    background: #FFDBF0;
    border-radius: 62px;
    font-weight: 500;
    font-size: 15px;
    line-height: 110%;
    letter-spacing: -0.03em;
    color: #333333;
    box-sizing: border-box;
    width: fit-content;
    height: fit-content;
    padding: 7px 14px;
    margin-top: auto;
`;

export default ChannelItem