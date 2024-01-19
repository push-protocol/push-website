// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React from 'react'
import styled from 'styled-components';
import { GridComponentsList } from '@site/src/config/GlassyComponentsList';
import GlassyComponents from './GlassyComponents'
import { device } from '@site/src/config/globals';
 

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
                    mobile={item.mobile}
                    />
            ))}
        </GridItem>

    

        <GridItem maxWidth="588px" main={true}>
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
                        mobile={item.mobile}
                        />
                ))}
        </GridItem>

        <GridItem maxWidth="282px" lastRow={true}>
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
                        mobile={item.mobile}
                        id={item.id}
                        />
                ))}
        </GridItem>
    </GridSystem>
  )
}

const GridItem = styled.div`
    display: flex;
    flex-direction: column;

    max-width: ${(props) => props.maxWidth || "100%"};
    min-width: ${(props) => props.maxWidth || "100%"};
    gap: 24px;

    @media ${device.laptopL} {
        max-width: ${(props) => props.main && '100%'};
        min-width: ${(props) => props.lastRow ? "100%" : '0'};
        flex-grow: ${(props) => props.main ? "1" : '0'};

        flex-direction: ${(props) => props.lastRow ? "row" : 'column'};

        & #anti-spam {
            max-width: 255px !important;
            min-width: 255px !important;
        }

        & #receive, #increase {
            flex: 1 0 calc((100% - 303px)/2) !important;
            min-height: 321px;
        }

        &:nth-child(1) {
            max-width: 255px !important;
        }

        &:nth-child(2) {
            flex: 1 1 10%;
        }

    }

    @media ${device.tablet} {
        &:nth-child(1) {
            max-width: 215px !important;
        }

        & #anti-spam {
            max-width: 215px !important;
            min-width: 215px !important;
        }
    }

    @media ${device.mobileL} {
        max-width: 100% !important;
        min-width: 100% !important;

        & #anti-spam {
            max-width: 100% !important;
            min-width: 100% !important;
        }

    }
`;

const GridSystem = styled.div`
    font-family: FK Grotesk Neue;
    width: 1200px;
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;

    @media ${device.laptopL} {
        width: 100%;

    }

    @media ${device.mobileL} {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export default NotificationSection;
