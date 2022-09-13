import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as PushLogoTextWhite }  from '../assets/PushLogoTextWhite.svg';
import { ReactComponent as PushLogoTextBlack }  from '../assets/PushLogoTextBlack.svg';


const DEFAULT_THRESHOLD_HEIGHT = 80;

function Header() {
    const [sticky, setSticky] = useState(false);
    const headerRef = useRef<any>(null);

    const stickyHeaderCallback = () => {
        if (window) {
            const scrollheight = window.scrollY;
            const thresholdHeight = headerRef.current?.clientHeight || DEFAULT_THRESHOLD_HEIGHT;
            setSticky(scrollheight > thresholdHeight);
        }
    };

    const PushLogo = sticky ? PushLogoTextBlack : PushLogoTextWhite;

    useEffect(() => {
        window.addEventListener('scroll', stickyHeaderCallback);
    
        return () => {
            window.removeEventListener('scroll', stickyHeaderCallback);
        };
    }, []);

    return (
        <StyledHeader className={`${sticky ? 'stickyHeader' : ''}`} ref={headerRef}>
            <p><PushLogo /></p>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  position: relative;
  border-radius: 32px;
  padding: 22px;
  z-index: 100000;

  background: rgba(18, 19, 21, 0.75);
  backdrop-filter: blur(12px);

  &.stickyHeader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(12px);
  }


  @media (max-width: 768px) {
    padding: 8px 24px;
  }
`;


export default Header;