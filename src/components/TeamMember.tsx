// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { ItemV, Span, Anchor } from './SharedStyling';
import ImageHolder from './ImageHolder';
import { ReactComponent as TwitterBlack } from '../assets/twitter_black.svg';
import { ReactComponent as LinkedInBlack } from '../assets/linkedin_black.svg';

// Internal Configs
import { device } from '../config/globals';

type TeamMemberProps = {
  name: string;
  title: string;
  img?: string[];
  twitter?: string;
  linkedin?: string;
};

function TeamMember(props: TeamMemberProps) {
  const { name, title, img = [], twitter, linkedin } = props || {};

  return (
    <BuiltByCard>
      <MemberImage
        width={133}
        height={133}
        src={img[0] || ''}
        srcSet={img[1] || ''}
        alt={name}
      />

      <MemberName>{name}</MemberName>

      <MemberTitle>{title}</MemberTitle>

      <MemberSocial>
        {twitter ? (
          <Anchor
            href={twitter}
            title={`${name} twitter`}
            target="_blank"
            margin="0"
            padding="0"
            hoverBG="transparent"
          >
            <TwitterBlack
              width={19}
              height={16}
            />
          </Anchor>
        ) : null}

        {linkedin ? (
          <Anchor
            href={linkedin}
            title={`${name} LinkedIn`}
            target="_blank"
            margin="0"
            padding="0"
            hoverBG="transparent"
          >
            <LinkedInBlack
              width={16}
              height={16}
            />
          </Anchor>
        ) : null}
      </MemberSocial>
    </BuiltByCard>
  );
}

const BuiltByCard = styled(ItemV)`
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 55px;
  padding: 16px 0 35px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  flex-basis: 22%;

  &:nth-child(9) {
    flex: 0 0 22%;
  }

  @media ${device.tablet} {
    flex-basis: 100%;
    padding: 24px 12px 30px 12px;
    row-gap: 12px;

    margin-left: 24px;
    margin-right: 24px;

    &:nth-child(9) {
      flex: 0 0 85%;
    }
  }
`;

const MemberImage = styled(ImageHolder)`
  border-radius: 50%;
`;

const MemberName = styled(Span)`
  display: block;
  font-weight: 500;
  font-size: 24px;
  line-height: 142%;
  text-align: center;
  color: #09090b;
  margin-top: 24px;
`;

const MemberTitle = styled(Span)`
  display: block;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: #303c5e;
`;

const MemberSocial = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  margin-top: 16px;
`;

export default React.memo(TeamMember);
