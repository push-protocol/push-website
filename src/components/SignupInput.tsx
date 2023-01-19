/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { device } from '../config/globals';

import {
  Span
} from './SharedStyling';

import useEmailValidationAndSend from '../hooks/useEmailValidationAndSend';
import useMediaQuery from 'hooks/useMediaQuery';

function SignupInput() {
  const [
    isLoading,
    apiResponse,
    emailError,
    onEmailSubmit
  ] = useEmailValidationAndSend();

  const isMobile = useMediaQuery(device.tablet);

  return (
    <Box>
      <Wrapper onSubmit={onEmailSubmit}>
        <input type="text" name="email" placeholder="Your Email" tabIndex={0} required/>
        <button tabIndex={0} type="submit">{isLoading ? 'Please Wait...' : 'Sign Up'}</button>
            
        {isLoading ? <MaskInput /> : null}
      </Wrapper>
      <Span
        color="#121315"
        size={isMobile ? '18px' : '20px'}
        weight="300"
        spacing="-0.03em"
        margin={isMobile ? '10px auto 0px auto' :'10px 0px 0px 15px'}
        lineHeight="138.5%">
            Thanks for Subscribing!
      </Span>
      {apiResponse && <Span className="msg" color='#FFFFFF'>{apiResponse}</Span>}
      {(!apiResponse && emailError) && <Span className="msg" color="red">{emailError}</Span>}
    </Box>
       
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;

  & span.msg {
    font-weight: 400;
    font-size: 16px;
    line-height: 142%;
    margin-top: 12px;
  }
`;

const Wrapper = styled.form`
    position: relative;
    display: flex;
    flex: 1;
    column-gap: 6px;
    align-items: center;
    background: #FFFFFF;
    border-radius: 21px;
    border: 1px solid #FFFFFF;
    padding: 5px;
    justify-content: space-between;

    @media ${device.tablet} {
        column-gap: 3px;
    }

    & input[type="text"] {
        all: unset;

        box-sizing: border-box;
        // border: 1px solid;

        font-family: 'Strawford';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: normal;
        letter-spacing: -0.03em; 
        color: #9C9CBE;
        min-width: 220px;
        width: 100%;
        padding: 6px;
        padding-left: 8px;

        &::placeholder {
            color: #A5A7B4;
            opacity: 1;
        }

    }

    & button {
        cursor: pointer;
        min-width: 160px;
        color: #FFFFFF;
        background: #DD44B9;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px 32px;
        white-space: nowrap;

        @media ${device.tablet} {
          min-width: auto;
          font-size: 12px;
          padding: 14px 16px;
        }  
    }
`;

const MaskInput = styled.div`
    position: absolute;
    background: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    opacity: 0.4;
    z-index: 10;
`;


export default SignupInput;
