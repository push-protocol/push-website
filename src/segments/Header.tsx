import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as PushLogoTextWhite }  from '../assets/PushLogoTextWhite.svg';
import { ReactComponent as PushLogoTextBlack }  from '../assets/PushLogoTextBlack.svg';


const DEFAULT_THRESHOLD_HEIGHT = 80;


const STICKY_STATES = {
    ZERO_SCROLL: 'landing',
    ON_LANDING_SCROLL: 'onLandingScroll',
    POST_LANDING_SCROLL: 'postLandingScroll'
};


function Header() {
    const [stickyClass, setStickyClass] = useState('');
    const headerRef = useRef<any>(null);

    const PushLogo = stickyClass === STICKY_STATES.POST_LANDING_SCROLL ? PushLogoTextBlack : PushLogoTextWhite;

    const stickyHeaderCallback = () => {
        if (window) {
            const scrollheight = window.scrollY;
            
            if (scrollheight > window.innerHeight) {
                setStickyClass(STICKY_STATES.POST_LANDING_SCROLL);
            } else if (scrollheight > 0 && scrollheight < window.innerHeight) {
                setStickyClass(STICKY_STATES.ON_LANDING_SCROLL);
            } else {
                setStickyClass(STICKY_STATES.ZERO_SCROLL);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickyHeaderCallback);
    
        return () => {
            window.removeEventListener('scroll', stickyHeaderCallback);
        };
    }, []);

    return (
        <StyledHeader className={stickyClass} ref={headerRef}>
            <p><PushLogo /></p>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 48px; // initial
    padding: 22px;
    z-index: 100000;
    background: rgba(18, 19, 21, 1);
   
    &.onLandingScroll {
        background: rgba(18, 19, 21, 0.75);
        backdrop-filter: blur(12px);
    }

    &.postLandingScroll {
        background: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(12px);
    }

    @media (max-width: 768px) {
        padding: 8px 24px;
    }
`;


export default Header;