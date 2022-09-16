// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

function SignupInput() {
    return (
        <Wrapper>
            <input type="text" placeholder="Your Email" tabIndex={1}/>
            <button tabIndex={1} onClick={() => alert('hi')}>Sign Up</button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    column-gap: 6px;
    align-items: center;
    background: #FFFFFF;
    border-radius: 21px;
    border: 1px solid #FFFFFF;
    padding: 5px;
    justify-content: space-between;

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
        min-width: 136px;
        color: #FFFFFF;
        background: #DD44B9;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px 32px;
    }
`;

export default SignupInput;
