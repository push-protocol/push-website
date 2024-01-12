// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React from 'react'
import styled from 'styled-components';
import { GridComponentsList } from '@site/src/config/GlassyComponentsList';
import GlassyComponents from './GlassyComponents'
 

const NotificationSection = () => {


  return (
    <GridSystem>
        <GridItem maxWidth="282px">
            {GridComponentsList?.notification?.first?.map((item)=>(
                <GlassyComponents 
                    title={item.title}
                    srcref={item.srcref}
                    srcMargin={item.srcMargin}
                    height={item.height}
                    tags={item.tags}
                    module={item.module}
                    />
            ))}
        </GridItem>

    

        <GridItem maxWidth="588px">
            {GridComponentsList?.notification?.second?.map((item)=>(
                    <GlassyComponents 
                        title={item.title}
                        srcref={item.srcref}
                        srcMargin={item.srcMargin}
                        height={item.height}
                        tags={item.tags}
                        module={item.module}
                        header={item.header}
                        buttonText={item.buttonText}
                        bgImage={item.bgImage}
                        />
                ))}
        </GridItem>

        <GridItem maxWidth="282px">
            {GridComponentsList?.notification?.third?.map((item)=>(
                    <GlassyComponents 
                        title={item.title}
                        srcref={item.srcref}
                        srcMargin={item.srcMargin}
                        height={item.height}
                        tags={item.tags}
                        module={item.module}
                        header={item.header}
                        buttonText={item.buttonText}
                        bgImage={item.bgImage}
                        imageTop={item.imageTop}
                        icon={item.icon}
                        />
                ))}
        </GridItem>
    </GridSystem>
  )
}

const GridItem = styled.div`
    // height: 705px;
    display: flex;
    flex-direction: column;
    max-width: ${(props) => props.maxWidth || "100%"};
    min-width: ${(props) => props.maxWidth || "100%"};
    // justify-content: space-between;
    // grid-template-areas:
    // "one two two three"
    // "four two two five"
    // "six seven seven eight";

    gap: 24px;
`;

const GridSystem = styled.div`
    font-family: FK Grotesk Neue;
    width: 1200px;
    display: flex;
    flex-direction: row;
    gap: 24px;
`;

export default NotificationSection;



    {/* <BlockItem height="147px">
            <H2 fontSize="19px" color="#FFF" margin="0 0 24px 0">Web3 Native</H2>

            <ItemV flexDirection="column" alignItems='flex-start' justifyContent="flex-start" gap="12px">
                <Tag background="#D98AEC" border="1px solid rgba(255, 255, 255, 0.05)" title="Smart Contract" color="#0D0D0F"  />

                <ItemV flexDirection="row" alignSelf="flex-start" gap="8px">
                    <Tag border="1px solid #343244" color="#635F7C" title="Gasless" />
                        
                    <Tag border="1px solid #343244"
                        color="#635F7C" title="Off-Chain" />
                        
                </ItemV>
            </ItemV>
        </BlockItem>

        <BlockItem height="169px">
            <H2 fontSize="19px" color="#FFF" margin="0 0 24px 0" lineHeight="130%">Cross-chain <br /> Notifications</H2>

            <GridImage
                src={require(`@site/static/assets/website/grids/notifications/cross-chain.png`).default}
                srcSet={`${require(`@site/static/assets/website/grids/notifications/cross-chain@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/cross-chain@3x.png`).default} 3x`}
                alt={'Push Snap'}
                title="Push Snap"
              />
        </BlockItem>

        <BlockItem height="340px">
                <H2 fontSize="19px" color="#FFF" lineHeight="130%">Customize Notification Preferences</H2>

                <GridImage
                src={require(`@site/static/assets/website/grids/notifications/notif.png`).default}
                srcSet={`${require(`@site/static/assets/website/grids/notifications/notif@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/notif@3x.png`).default} 3x`}
                alt={'Push Snap'}
                title="Push Snap"
                margin="48px auto 0 auto"
                // width="100%"
              />
        </BlockItem> */}


    //     <BlockItem position='two' height="478px">
    //     <H2 fontSize="19px" color="#FFF" margin="0 0 10px 0" lineHeight="130%" textAlign="center">Lightweight Code with Rapid API Integration</H2>

    //     <SubscribeText>
    //         {'<4 mins'}
    //     </SubscribeText>

    //     <ButtonItem
    //         background="#E64DE9"
    //         padding="14px 22px"
    //         margin="16px auto 32px auto"
    //         fontWeight="500"
    //         fontSize="16px"
    //         >
    //         Start Building
    //         <WhiteArrow />
    //      </ButtonItem>

    //      <GridImage
    //         src={require(`@site/static/assets/website/grids/notifications/subscribe.png`).default}
    //         srcSet={`${require(`@site/static/assets/website/grids/notifications/subscribe@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/subscribe@3x.png`).default} 3x`}
    //         alt={'Push Snap'}
    //         title="Push Snap"
    //         // width="100%"
    //       />
    // </BlockItem>

    // <BlockItem position="seven" padding="0px" height="202px">
    // <Playground bgImage>
    //     <H2 fontSize="19px" color="#FFF" margin="0 0 24px 0" lineHeight="130%" textAlign="center">Interoperable <br /> Notifications</H2>
    // </Playground>
    // </BlockItem>


//     <BlockItem position='three' padding="0px 24px" height="76px">
//     <ItemV flexDirection="row" justifyContent="space-between" alignItem="center" flex="1" margin="auto 0" height="100%">
//         <H2 fontSize="19px" color="#FFF">Anti Spam</H2>

//         <GridImage
//             src={require(`@site/static/assets/website/grids/notifications/spam.png`).default}
//             srcSet={`${require(`@site/static/assets/website/grids/notifications/spam@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/spam@3x.png`).default} 3x`}
//             alt={'Push Snap'}
//             title="Push Snap"
//             width="auto"
//             height="100%"
//       />
//     </ItemV>
// </BlockItem>


// <BlockItem position="five" padding="0px" height="321px">
//         <GridImage
//             src={require(`@site/static/assets/website/grids/notifications/snap.png`).default}
//             srcSet={`${require(`@site/static/assets/website/grids/notifications/snap@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/snap@3x.png`).default} 3x`}
//             alt={'Push Snap'}
//             title="Push Snap"
//             width="100%"
//             height="auto"
//             margin="24px 0"
//       />

//     <H2 fontSize="19px" color="#FFF" margin="0 0 24px 24px" lineHeight="130%">Receive Notifications <br /> in MetaMask</H2>
// </BlockItem>



// <BlockItem position="eight" height="260px">
//     <H2 fontSize="19px" color="#FFF" margin="0 0" lineHeight="130%">Increase <br /> Engagement</H2>

//         <GridImage
//             src={require(`@site/static/assets/website/grids/notifications/engage.png`).default}
//             srcSet={`${require(`@site/static/assets/website/grids/notifications/engage@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/engage@3x.png`).default} 3x`}
//             alt={'Push Snap'}
//             title="Push Snap"
//             width="auto"
//             height="200px"
//             margin="0 auto"
//       />
// </BlockItem>