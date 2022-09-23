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

function SignupInput() {
  const [
    isLoading,
    emailSuccess,
    emailError,
    onEmailSubmit,
    emailSuccessMsg
  ] = useEmailValidationAndSend();

  return (
    <Box>
      <Wrapper onSubmit={onEmailSubmit}>
        <input type="text" name="email" placeholder="Your Email" tabIndex={1} required/>
        <button tabIndex={1} type="submit">{isLoading ? 'Please Wait...' : 'Sign Up'}</button>
            
        {isLoading ? <MaskInput /> : null}
      </Wrapper>
      {emailSuccess && <Span className="msg" color='#FFFFFF'>{emailSuccessMsg}</Span>}
      {emailError && <Span className="msg" color="red">{emailError}</Span>}
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

        @media ${device.tablet} {
            min-width: fit-content;
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
