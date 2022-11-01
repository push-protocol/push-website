/* eslint-disable */
// @ts-nocheck

// External Components
import styled from 'styled-components';
import { Section } from './SharedStyling';
import { FiArrowUpRight } from 'react-icons/fi'
// Internal Components
import { ItemHV2, SpanV2, Atag } from './SharedStylingV2';

type AlertProps = {
    hideAlert: ()=>void;
};

const Alert = ({hideAlert}:AlertProps)=>{
    const alertMessage = "Decentralized, uncensorable, web3-native chat is here. Powered by Push Protocol.";
    const alertLink = "https://app.push.org/";

    return(
        <Section>
        <AlertContainer>
            <AlertContent>
                <SpanV2 fontWeight='500' fontSize='18px'>
                    {alertMessage}
                </SpanV2>
                <KnowMoreLink href={alertLink} target="_blank">
                    Know more
                    <FiArrowUpRight />
                </KnowMoreLink> 
            </AlertContent>
        </AlertContainer>
        </Section>
    )
};

const AlertContainer = styled(ItemHV2)`
    background: linear-gradient(90deg, rgba(18, 19, 21, 0.5) -2.55%, rgba(42, 42, 57, 0.5) 32.62%, rgba(142, 49, 122, 0.5) 68.34%, rgba(18, 19, 21, 0.5) 102.97%);
    // background-color: black;
    padding: 0.5rem 0;
    height: 50px;
`

const AlertContent = styled(ItemHV2)`
    font-size: 1.125rem;
`

const KnowMoreLink = styled(Atag)`
    padding:0;
    background: none;
    font-size: 1.125rem;
    padding-left: 1rem;
    display:flex;
    flex-direction:row;
    align-items:center;
    &:hover {
        opacity: 0.75;
      }
`

export default Alert;