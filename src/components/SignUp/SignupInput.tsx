/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from "react";

// External Components
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

// Internal Components
import { Span } from "@site/src/css/SharedStyling";

import useEmailValidationAndSend from "@site/src/hooks/useEmailValidationAndSend";
import useMediaQuery from "@site/src/hooks/useMediaQuery";

// Internal Configs
import { device } from "@site/src/config/globals";

export type signupType = {
  showButton?: boolean;
  showArrow?: boolean;
  background?:string;
  borderColor?:string;
};

function SignupInput(props: signupType) {
  const [isLoading, apiResponse, emailError, onEmailSubmit] =
    useEmailValidationAndSend();

  // Internationalization
  const { t } = useTranslation();

  return (
    <Box>
      <Wrapper background={props.background} border={props.borderColor} onSubmit={onEmailSubmit}>
        <SignupInputField
          type="text"
          name="email"
          placeholder="Email"
          background={props.background}
          tabIndex={0}
          required
        />
        {props.showButton && (
          <>
            <button tabIndex={0} type="submit">
              {isLoading
                ? t("home.email-section.loading-submit-button")
                : t("home.email-section.submit-button")}
            </button>
            {isLoading ? <MaskInput /> : null}
          </>
        )}
        {props.showArrow && (
          <Button
            aria-label="Subscribe"
            className="icon"
            tabIndex={0}
            type="submit"
          >
            {!isLoading && <AiOutlineArrowRight />}
            {isLoading && <MaskInput />}
          </Button>
        )}
      </Wrapper>

      {apiResponse && (
        <Span className="msg" color="#121315">
          {apiResponse}
        </Span>
      )}
      {!apiResponse && emailError && (
        <Span className="msg" color="red">
          {emailError}
        </Span>
      )}
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;

  & ${Span} {
    font-size: 20px;
    margin: 10px 0px 0px 15px;
    font-weight: 300;

    &.msg {
      line-height: 138.5%;
      margin-top: 12px;
      letter-spacing: -0.03em;
    }
  }

  @media ${device.tablet} {
    & ${Span} {
      font-size: 18px;
      margin: 10px auto 0px auto;
    }
  }
`;

const Wrapper = styled.form`
  position: relative;
  display: flex;
  flex: 1;
  column-gap: 6px;
  align-items: center;
  background: ${props=> props.background || '#ffffff'};
  border-radius: 21px;
  border: 1px solid ${props => props.border || '#ffffff'};
  padding: 5px;
  justify-content: space-between;

  @media ${device.tablet} {
    column-gap: 3px;
  }

  & button {
    cursor: pointer;
    min-width: 160px;
    color: #ffffff;
    background: #dd44b9;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 32px;
    white-space: nowrap;
    border: 0;

    @media ${device.tablet} {
      min-width: auto;
      font-size: 12px;
      padding: 14px 16px;
    }
  }
`;

const SignupInputField = styled.input`
  all: unset;

  box-sizing: border-box;
  font-family: "Strawford";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.03em;
  color: #9c9cbe;
  background: ${props=>props.background || '#ffffff'};
  min-width: 220px;
  width: 100%;
  padding: 6px;
  padding-left: 8px;

  @media ${device.laptop} {
    min-width: auto;
  }

  &:placeholder {
    color: #a5a7b4;
    opacity: 1;
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

const Button = styled.span`
  border: none;
  position:absolute;
  top:10px;
  right:10px;
  // bottom:50%;
  // transform: translateY(-50%,-50%);
`;

export default SignupInput;
