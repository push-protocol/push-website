// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ScrollTrigger from 'react-scroll-trigger';
import Wave from 'react-wavify';

import { BsArrowUpRight } from 'react-icons/bs';

import {
    HeroHeader, CurvedBottomBorderSection, Section, SectionFS, SectionFSHero, Content, ItemH, ItemV, ItemBreak, WaveOuter,
    WaveInner, Arc, H1, H2, H3, Image, Image1, Span, Anchor, Button,
    Showoff, FormSubmision, Input, TextField, DottedSection
} from '../components/SharedStyling';

function AboutUs() {
    return (
        <AboutUsWrapper>
            <CurvedBottomBorderSection id="aboutus" padding="40px 160px 0px 160px">
                <Content className="contentBox">
                    <ItemH margin="120px 0 0 0" flex="1">
                        <ItemV justifyContent="center">
                            <HeroHeader>
                                About Push
                            </HeroHeader>
                        </ItemV>
                    </ItemH>

                    <ItemH flex="1">
                        <ItemV>
                            <Anchor
                                href="https://docs.epns.io/developers"
                                title="Job Openings"
                                target="_blank"
                                bg="#DD44B9"
                                radius="16px"
                                padding="14px 32px"
                                size="18px"
                                weight="500"
                                spacing="-0.03em"
                                lineHeight="26px"
                            >
                                Now Hiring, Explore Careers&nbsp;&nbsp;<BsArrowUpRight className='anchorSVGlink'/>
                            </Anchor>
                        </ItemV>
                    </ItemH>



                    <ItemH flex="2" gap="90px">
                        <ItemV justifyContent="flex-start" alignItems="flex-start">
                            <Span color="rgba(255, 255, 255, 1)" size="26px" weight="400" spacing="-0.03em" lineHeight="142%">
                                Push is a decentralized middleware for all dapps, smart contracts, services, and users. 
                            </Span>

                            <Span color="rgba(255, 255, 255, 1)" size="26px" weight="400" spacing="-0.03em" lineHeight="142%">
                                Hundreds of companies and individuals are using Push to power on-chain communication in response to both on- and off-chain activity, enabling a dynamic and resilient communication infrastructure.
                            </Span>
                        </ItemV>

                        <ItemV justifyContent="flex-start" alignItems="flex-start">
                            <Span color="rgba(255, 255, 255, 1)" size="19px" weight="400" spacing="-0.03em" lineHeight="160%">
                                How Push Started Story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem dolor. Sed rhoncus elit a rhoncus viverra. Vivamus faucibus nec ligula sed fringilla. Suspendisse feugiat magna accumsan quam molestie, ac rhoncus purus cursus. Etiam et mauris sollicitudin, mattis odio eu, varius elit. Aliquam sed sem convallis, posuere massa posuere, dictum magna. 
                            </Span>

                            <Span color="rgba(255, 255, 255, 1)" size="19px" weight="400" spacing="-0.03em" lineHeight="160%">
                                Ut ac vulputate nulla, a facilisis ipsum. Fusce posuere diam tortor, a blandit ante commodo sit amet. Phasellus eleifend dapibus rutrum.
Aliquam dictum leo sed mi placerat, at consectetur eros facilisis. Phasellus ut scelerisque erat, nec tincidunt enim. Ut lacinia justo in ligula tempus ultricies.
                            </Span>
                        </ItemV>
                    </ItemH>
                    
                </Content>
            </CurvedBottomBorderSection>


            <CurvedBottomBorderSection id="leadership" background="#fff" padding="120px 160px 80px 160px">
                <Content className="contentBox">
                    <ItemH>
                        <ItemV justifyContent="center" gap="22px">
                            <H2 size="40px" weight="700" spacing="-0.02em" lineHeight="110%">Our Leadership</H2>

                            <Span weight="400" color="#303C5E" size="19px" lineHeight="160%" spacing="-0.03em">
                                The most diverse personalities have found each other at Push. Unique people with special talents and extraordinary stories. We are united by the joy we take in our tech and in searching for and finding unexpected treasures.
                            </Span>
                        </ItemV>
                    </ItemH>

                    <ItemH gap="24px" margin="60px 0 0 0">
                        <InvestorCards></InvestorCards>
                        <InvestorCards></InvestorCards>
                        <InvestorCards></InvestorCards>
                        <InvestorCards></InvestorCards>
                        <InvestorCards></InvestorCards>
                        <InvestorCards></InvestorCards>
                    </ItemH>

                    <ItemH margin="120px 0 0 0" justify-content="flex-start" width="640px">
                        <Span color="#121315" weight="700" size="40px" lineHeight="110%" spacing="-0.02em">Backed by successful entrepreneurs and venture capital funds.</Span>
                    </ItemH>
                </Content>
            </CurvedBottomBorderSection>

        </AboutUsWrapper>
    );
}

const AboutUsWrapper = styled.div`
  & #aboutus .contentBox {
    row-gap: 48px;
  }

  #leadership {
    justify-content: flex-start;

  }
`;

const InvestorCards = styled.div`
    width: 261px;
    height: 311px;
    background: #F0DCFF;
    border-radius: 48px;
`;


export default AboutUs;