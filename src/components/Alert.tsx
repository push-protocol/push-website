/* eslint-disable */
// @ts-nocheck

// External Components
import styled from 'styled-components';
import { ItemH, Section } from './SharedStyling';
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

// Internal Components
import { ItemHV2, SpanV2, Atag } from './SharedStylingV2';

// Internal Configs
import { device } from '../config/globals';


const Alert = ({ hideAlert, isAlertVisible }) => {
    const alertMessage = "Decentralized, uncensorable, web3-native chat is here. Powered by Push Protocol.";
    const alertLink = "https://app.push.org/";

    return(
        <Section>
        {isAlertVisible && 
            (<AlertContainer>
            <AlertContent>
                <AlertText>
                    {alertMessage} 
                    <KnowMoreLink href={alertLink} target="_blank">Know more <FiArrowUpRight /></KnowMoreLink>
                </AlertText>
            </AlertContent>

            <CancelIcon>
                <KnowMoreLinkMobile href={alertLink} target="_blank">
                    Know more
                    <FiArrowUpRight />
                </KnowMoreLinkMobile> 
                <AiOutlineClose size="1.25rem" color='#7f7b80' className='icon' onClick={hideAlert} />
            </CancelIcon>
        </AlertContainer>)}
       
        </Section>
    )
};

const AlertContainer = styled(ItemHV2)`
    background: linear-gradient(90deg, rgba(18, 19, 21, 0.5) -2.55%, rgba(42, 42, 57, 0.5) 32.62%, rgba(142, 49, 122, 0.5) 68.34%, rgba(18, 19, 21, 0.5) 102.97%);
    background-color: black;
    padding: 1rem 0;
    width: 100%;
    display:flex;
    @media ${device.tablet}{
        padding: 0rem 0rem;
        display:none;
    }
`

const AlertContent = styled(ItemHV2)`
    font-size: 1.125rem;
    white-space:no-wrap;
    @media ${device.tablet}{
        text-align: left;
        padding: 0.5rem 0.5rem;
    }


`
const AlertText = styled.b`
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media ${device.tablet}{
        flex-direction: column;
        font-size: 14px;
    }
`
const CancelIcon = styled.div`
    margin-right: 20px;
    @media ${device.tablet}{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0.5rem;
    }

    .icon{
        cursor: pointer;
        @media ${device.tablet}{
            width: 15px;
        }
    }
`

const KnowMoreLink = styled(Atag)`
    padding: 0;
    background: none;
    font-size: 1.125rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
        opacity: 0.75;
      }

      @media ${device.tablet}{
        font-size: 14px;
        display: none;
    }
`

const KnowMoreLinkMobile = styled(Atag)`
    display: none;

    @media ${device.tablet}{
        display: flex;
        padding: 0;
        background: none;
        font-size: 14px;
    }`

export default Alert;