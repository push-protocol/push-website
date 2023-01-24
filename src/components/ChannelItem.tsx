// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { useEffect ,useRef } from 'react'
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BsArrowUpRight } from 'react-icons/bs'
import VanillaTilt from 'vanilla-tilt';

export const Tilt = (props) => {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }

const ChannelItem = ({ channelProp }) => {
  const [channelObject, setChannelObject] = React.useState({});
  const [loading, setLoading] = React.useState(true);
 


    React.useEffect(() => {
        if (!channelProp) return;
        setChannelObject(channelProp);
        setLoading(false)
      }, [channelProp]);

  return (
    <Container href={channelObject.url} target="_blank">
        <ChannelTop>
            <ChannelLogo>
                {loading ? (
                    <Skeleton
                        height={100} width={100} borderRadius={20}
                    />
                    ) : (
                        <ChannelLogoImg src={`${channelObject.icon}`} />
                    )}
            </ChannelLogo>

            <div className='class'>
                <BsArrowUpRight size={25} color={'#000'} />
            </div>
        </ChannelTop>
        
        <ChannelTitle><b>{channelObject.name}</b></ChannelTitle>

        <ChannelDesc>{channelObject.info}</ChannelDesc>

        <ChannelType><b>Infrastructure</b></ChannelType>
        
    </Container>
  )
}

const Container = styled.a`
    border: 1px solid #BAC4D6;
    border-radius: 38.5px;
    padding: 30px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    flex: 1;
    &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid #BAC4D6;
        backdrop-filter: blur(60px);
        div:first-child {
            .class{
                display: block;
            }
         }
    } 
    div:first-child {
            .class{
                display: none;
            }
    }
`;

const ChannelTop = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ChannelLogo = styled.div`
    max-width: 100px;
    min-width: 32px;
    margin-bottom: 30px;
`;

const ChannelLogoImg = styled.img`
    object-fit: contain;
    width: 100%;
    border: 1px solid #BAC4D6;
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