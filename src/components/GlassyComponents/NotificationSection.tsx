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
    gap: 24px;

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
