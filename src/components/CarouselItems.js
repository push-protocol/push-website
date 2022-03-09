import React, { useRef } from "react";

import styled from 'styled-components';
import {Content, Item, ItemH, H1, Span, Anchor} from 'components/SharedStyling';

import Carousel from 'react-elastic-carousel';

import carouselList from 'config/carouselList';

// Create
function CarouselItems() {
  // For refs
  const carouselRef = useRef(null);
  let resetTimeout;

  // RENDER
  return (
    <Carousel
      ref={carouselRef} 
      showArrows={false}
      enableAutoPlay={true}
      autoPlaySpeed={6000}
      pagination={false}
      onNextEnd={({ index }) => {
        clearTimeout(resetTimeout)
        if (index + 1 === 3) {
          if (carouselRef?.current?.goTo) {
            resetTimeout = setTimeout(() => {
              if (carouselRef?.current?.goTo) {
                  carouselRef.current.goTo(0)
              }
            }, 3000)
          }
        }
      }}
    >
    {
      Object.keys(carouselList).map(function(key) {
        const item = carouselList[key]

        return (
          <ItemH self="stretch" align="stretch" width="100vw" height="100vh">
            <BGImage
              bg={`/governance/${item.src}.png`}
              bg2x={`/governance/${item.src}@2x.png`}
              bg3x={`/governance/${item.src}@3x.png`}
            />

            <Content className="contentBox">
              <GovernanceItemH columnGap="40px" margin="0px 20px">
                <Item align="flex-start">
                  {item.title &&
                    <H1>{item.title}</H1>
                  }

                  {item.subtitle &&
                    <Span margin="-25px 0 0 0"><Span color="rgba(255, 255, 255, 0.5)" weight="600" size="0.9rem">{item.subtitle}</Span></Span>
                  }
                  
                  {item.content &&
                    <Span margin="20px 0px" color="rgba(255, 255, 255)" size="1.5rem" weight="300">{item.content}</Span>
                  }

                  {item.cta &&
                    <ItemH align="flex-start" justify="flex-start" margin="10px -10px 10px -10px" size="0.8rem">
                      <Anchor href={item.cta} title={item.ctatitle} target="_blank" bg="#000" margin="10px" radius="4px">{item.ctadisplaytext}</Anchor>
                    </ItemH>
                  }
                </Item>

              </GovernanceItemH>
            </Content>

          </ItemH>
        )
      })
    }
    </Carousel>
  );
}

// css style
const BGImage = styled(Item)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:-webkit-image-set( url(${props => props.bg || 'transparent'}) 1x, url(${props => props.bg2x || 'transparent'}) 2x, url(${props => props.bg3x || 'transparent'}) 3x );
  background-repeat: no-repeat;
  background-size: cover;
`

const GovernanceItemH = styled(ItemH)`
  max-width: 75%;


`

// Export Default
export default CarouselItems;
