/* eslint-disable */
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';
import styled from 'styled-components';

// Internal Components
import { ItemH, Section } from '@site/src/css/SharedStyling';

// Internal Configs
import { device } from '@site/src/config/globals';

// turn alert to false to disable this
export const Alert = () => {
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);

  const hideAlertHandler = () => {
    setIsAlertVisible(false);
  };

  const alertMessage = 'Push Metamask Snap is now live,';

  const alertMessageEs = 'Push Metamask Snap ya está disponible, '
  const alertMessageHi= 'पुश मेटामास्क स्नैप अब लाइव है, '

  const alertLink = `https://snaps.metamask.io/snap/npm/pushprotocol/snap/`;

  // Internationalization
  const { t, i18n } = useTranslation();

  const openLink = () => {
    
  };

  return (
    <Section>
      {isAlertVisible && (
        <AlertContainer>
          <AlertText onClick={() => {window.open(alertLink, '_blank');}}>
            {i18n.language === 'es' ? alertMessageEs : (i18n.language === 'hi' ? alertMessageHi : alertMessage)}

            <KnowMoreLink>
              {t('alert.know-more')}
            </KnowMoreLink>

            <FiArrowUpRight className="icon" />
          </AlertText>

        <CancelIcon>
          <AiOutlineClose
            size="1.25rem"
            color="#7f7b80"
            className="icon"
            onClick={hideAlertHandler}
          />
        </CancelIcon>
      </AlertContainer>
      )}
    </Section>
  );
};

const AlertContainer = styled(ItemH)`
  background: linear-gradient(
    90deg,
    rgba(18, 19, 21, 0.5) -2.55%,
    rgba(42, 42, 57, 0.5) 32.62%,
    rgba(142, 49, 122, 0.5) 68.34%,
    rgba(18, 19, 21, 0.5) 102.97%
  );
  background-color: black;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    padding: 0rem 0rem;
  }
`;

const AlertText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 142%;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: auto auto;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 14px;
    width: 80%;
    text-align: center;
    padding: 10px;
  }

  .icon {
    position: relative;
    bottom: -3px;
  }
`;
const CancelIcon = styled.div`
  margin-right: 20px;
  @media ${device.tablet} {
  }

  .icon {
    cursor: pointer;
    @media ${device.tablet} {
      width: 15px;
    }
  }
`;

const KnowMoreLink = styled.span`
  padding: 0;
  background: none;
  font-size: 1.125rem;
  padding-left: 0.3rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    opacity: 0.75;
  }

  @media ${device.tablet} {
    font-size: 14px;
    padding-left: 0.5rem;
  }
`;
