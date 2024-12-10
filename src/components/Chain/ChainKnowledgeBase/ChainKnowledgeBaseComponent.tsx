// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

import { device } from '../../../config/globals';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useModal from '../hooks/useModal';

import { Button, H2, H3, ItemH, ItemV } from '../../../css/SharedStyling';
import { ChainKnowledgeBaseHeaderConfig } from '../config/ChainKnowledgeBaseConfig';
import ImageHolder from '../../../../src/components/ImageHolder';
import ChainElevateModal from '../ChainElevateModal';

const ChainKnowledgeBaseComponent = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const { isOpen, open, close } = useModal();

  return (
    <ChainKnowledgeBaseComponentWrapper>
      <ItemH gap='32px' flexDirection={isMobile && 'column'}>
        <ItemV>
          <H2
            fontSize={isMobile ? '36px' : '54px'}
            fontWeight='500'
            fontFamily='N27'
            lineHeight='140%'
            letterSpacing='-1.098px'
            textAlign='center'
          >
            {ChainKnowledgeBaseHeaderConfig.title}
          </H2>

          <H3
            fontSize={isMobile ? '16px' : '20px'}
            fontWeight='400'
            fontFamily='N27'
            lineHeight='140%'
            textAlign='center'
            dangerouslySetInnerHTML={{
              __html: ChainKnowledgeBaseHeaderConfig.description,
            }}
          />
        </ItemV>

        <IFrameItem>
          <IFrameImage
            background={ChainKnowledgeBaseHeaderConfig?.image && '#E8EFF8'}
            borderRadius='32px'
          >
            {ChainKnowledgeBaseHeaderConfig?.video && (
              <iframe
                width={isMobile ? '100%' : '560px'}
                height={isMobile ? '100%' : '325px'}
                src={ChainKnowledgeBaseHeaderConfig.video.src}
                title={ChainKnowledgeBaseHeaderConfig.video.title}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            )}

            {ChainKnowledgeBaseHeaderConfig?.image && (
              <ImageHolder
                src={
                  require(
                    `@site/static/assets/website/chain/${ChainKnowledgeBaseHeaderConfig?.image}.webp`
                  ).default
                }
                srcSet={`${require(`@site/static/assets/website/chain/${ChainKnowledgeBaseHeaderConfig?.image}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/${ChainKnowledgeBaseHeaderConfig?.image}@3x.webp`).default} 3x`}
                alt={'alt'}
                title={'title'}
              />
            )}
          </IFrameImage>

          <IframeContent>
            <H3
              fontSize={isMobile ? '14px' : '16px'}
              fontWeight='400'
              fontFamily='N27'
              lineHeight={isMobile ? '100%' : '140%'}
              letterSpacing='-0.64px'
              color='#000'
              flex='1'
            >
              Craft seamless, consumer-focused experiences for users on any
              chain
            </H3>
            <Button
              background='#D548EC'
              fontFamily='N27'
              fontWeight='500'
              fontSize='18px'
              onClick={open}
            >
              Get Notified about Testnet
            </Button>
          </IframeContent>
        </IFrameItem>
      </ItemH>

      {/* modal */}
      <ChainElevateModal isOpen={isOpen} onClose={close} />
    </ChainKnowledgeBaseComponentWrapper>
  );
};

export default ChainKnowledgeBaseComponent;

const ChainKnowledgeBaseComponentWrapper = styled.div`
  margin: 213px auto 0 auto;

  @media ${device.mobileL} {
    margin: 153px auto 0 auto;
  }
`;

const IFrameImage = styled(ItemH)`
  aspect-ratio: 16/9;
`;

const IFrameItem = styled.div`
  padding: 16px;
  background: white;
  display: flex;
  border-radius: 40px;
  flex-direction: column;
  max-width: 592px;
  justify-content: center;

  iframe {
    border-radius: 24px;
  }
`;

const IframeContent = styled.div`
  display: grid;
  margin: 16px 0 0 0;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 16px;

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;
