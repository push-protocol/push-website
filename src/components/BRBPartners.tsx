import React from 'react';

import styled from 'styled-components';

import Biconomy from '../assets/brb/partners/biconomy.svg';
import EthGlobal from '../assets/brb/partners/ethglobal.svg';
import Flipkart from '../assets/brb/partners/flipkart.svg';
import Graph from '../assets/brb/partners/graph.svg';
import Polygon from '../assets/brb/partners/polygon.svg';
import Shardeum from '../assets/brb/partners/sharedeum.svg';
import Timeswap from '../assets/brb/partners/timeswap.svg';
import Aragon from '../assets/brb/partners/aragon.svg';
import Filecoin from '../assets/brb/partners/filecoin.svg';
import Chainsafe from '../assets/brb/partners/chainsafe.svg';
import Alchemy from '../assets/brb/partners/alchemy.svg';
import Ethereum from '../assets/brb/partners/ethereum-foundation.svg';
import { ItemH } from './SharedStyling';

export const Partners = () => {

  return (
    <PartnersContainer >
      <Header>Partners</Header>
      <PartnersLogoContainer>
        <PartnerColumn>
          <PartnerItem>
            <PartnerIcon src={Ethereum} />
          </PartnerItem>
          <PartnerItem>
            <PartnerIcon src={Flipkart} />
          </PartnerItem>
          <PartnerItem>
            <PartnerIcon src={Aragon} />
          </PartnerItem>
          <PartnerItem>
            <PartnerIcon src={Chainsafe} />
          </PartnerItem>
        </PartnerColumn>
        <PartnerColumn>
          <PartnerItem>
            <PartnerIcon src={Polygon} />
          </PartnerItem>
          <PartnerItem>
            <PartnerIcon src={Graph} />
          </PartnerItem>
          <PartnerItem>
            <PartnerIcon src={Biconomy} />
          </PartnerItem>
          <PartnerItem>
            <PartnerIcon src={Alchemy} />
          </PartnerItem>
        </PartnerColumn>
        <PartnerColumn>
          <PartnerItem>
            <PartnerIcon src={EthGlobal} />
          </PartnerItem>
          <PartnerItem>
            <PartnerIcon src={Shardeum} />
          </PartnerItem>
          <PartnerItem>
            <PartnerIcon src={Filecoin} />
          </PartnerItem>
          <PartnerItem>
            <PartnerIcon src={Timeswap} />
          </PartnerItem>
        </PartnerColumn>
      </PartnersLogoContainer>

      {/* <BottomRow>
        <PartnerItem>
          <PartnerIcon src={Chainsafe} />
        </PartnerItem>
        <PartnerItem>
          <PartnerIcon src={Alchemy} />
        </PartnerItem>
      </BottomRow> */}
    </PartnersContainer>
  );
};

const PartnersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 108px;
  @media (max-width: 768px) {
    margin: 0px 0px 114px;
  }
`;

const Header = styled.h3`
  font-size: 46px;
  font-weight: 400;
  font-family: Glancyr;
  color: #fff;
  margin: 0px 0px 60px;
  @media (max-width: 768px) {
    margin: 0px 0px 49px;
  }
`;

const PartnersLogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 56px;
  }
`;

const PartnerColumn = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 56px;
`;

const PartnerIcon = styled.img`
  width: auto;
  height: auto;
  max-width: 241px;
  max-height: 65px;
`;

const PartnerItem = styled.div`
  width: auto;
  height: 65px;
  max-height: 65px;
  display: flex;
  align-items: center;
`;

const BottomRow = styled(ItemH)`
  max-width: 100vw;
  justify-content: space-evenly;
  padding: 56px 150px 0px;
  @media (max-width: 768px) {
    padding: 56px 0px 0px;
    flex-direction: column;
    align-items: center;
    gap: 56px;
  }
`;
