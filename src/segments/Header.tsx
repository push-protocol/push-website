import React from "react";

import styled, { css } from 'styled-components';
import Bell from 'components/Bell';


// Create Header
function Header({ badgeCount, bellPressedCB }) {

  return (
    <HeaderStyle>
      <ProfileContainer>
        <Logo src="epns.png" />
      </ProfileContainer>
    </HeaderStyle>
  );
}

// CSS Styles
const HeaderStyle = styled.div`
  height: 100%;
  padding: 10px 15px;
  background: #ffffffcc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const ProfileContainer = styled.div`
  display: flex;
  flex: 1;
  justfy-content: flex-start;
`

const Logo = styled.img`
  height: 45px;
`

const UserControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageButton = styled.button`

`

const NetworkDisplayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Notice = styled.span`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
`

const PrimaryTheme = styled(Notice)`
  background: #e20880;
`

const ThirdTheme = styled(Notice)`
  background: #674c9f;
`

const Connection = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 100%;
  flex-shrink: 0;

  ${props => props.phase === 'active' && css`
    background: #77DD77;
  `};

  ${props => props.phase === 'waiting' && css`
    background: #FFAE42;
  `};

  ${props => props.phase === 'error' && css`
    background: #DC143C;
  `};
`

// Export Default
export default Header;
