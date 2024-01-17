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
            {GridComponentsList?.chat?.first?.map((item)=>(
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
                    />
            ))}
        </GridItem>

    

        <GridItem maxWidth="588px" main={true}>
            {GridComponentsList?.chat?.second?.map((item)=>(
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
                        />
                ))}
        </GridItem>

        <GridItem maxWidth="282px" lastRow={true}>
            {GridComponentsList?.chat?.third?.map((item)=>(
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

    &:nth-child(2) {
        flex-wrap: wrap;
        flex-direction: row;
        flex-grow: 1;
        flex-shrink: 1;
        & div:nth-child(1) {
            flex-basis: 100%;
        }

        & div:nth-child(2) {
            flex-basis: calc(50% - 12px);
        }

        & div:nth-child(3) {
            flex-basis: calc(50% - 12px);
        }
    }

    @media ${device.laptopL} {
        // max-width: 100%;
        max-width: ${(props) => props.main && '100%'};
        min-width: ${(props) => props.lastRow ? "100%" : '0'};
        flex-grow: ${(props) => props.main ? "1" : '0'};

        flex-direction: ${(props) => props.lastRow ? "row" : 'column'};

        &:nth-child(1) {
            max-width: 255px !important;
        }

        &:nth-child(2) {
            flex: 1 1 10%;
        }

        &:nth-child(3) {
             & div:nth-child(1) {
                max-width: 255px !important;
                min-width: 255px !important;
                box-sizing: border-box !important
            }

            & div:nth-child(2) {
                max-height: 321px !important;
                min-height: 321px !important;
            }

            & div:nth-child(3) {
                max-height: 321px !important;
                min-height: 321px !important;
            }
        }
    }

    @media ${device.mobileL} {
        max-width: 100% !important;
        min-width: 100% !important;
        flex-direction: column;

        &:nth-child(3) {
            & div:nth-child(1) {
               max-width: 100% !important;
               min-width: 100% !important;
               box-sizing: border-box !important
           }
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
    margin: 20em 0;

    @media ${device.laptopL} {
        width: 100%;
        // background: red;
        // display: grid;
        // grid-template-columns: repeat(2, minmax(0, 1fr));

    }

    @media ${device.mobileL} {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export default NotificationSection;
