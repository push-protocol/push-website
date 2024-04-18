/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from "react";

// External Components
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiLoaderAlt } from "react-icons/bi";
import styled from "styled-components";

// Internal Components
import { Span } from "@site/src/css/SharedStyling";

import useEmailValidationAndSend from "@site/src/hooks/useEmailValidationAndSend";

// Internal Configs
import { device } from "@site/src/config/globals";

export type signupType = {
  showButton?: boolean;
  showArrow?: boolean;
  background?: string;
  borderColor?: string;
  inputWidth?: string;
};

export const MailingSignup = (props: signupType) => {
  const [isLoading, apiResponse, emailError, onEmailSubmit] =
    useEmailValidationAndSend();

  // Internationalization
  const { t } = useTranslation();

  return (
    <Box>
      <Wrapper
        background={props.background}
        border={props.borderColor}
        onSubmit={onEmailSubmit}
      >
        <SignupInputField
          type="text"
          name="email"
          placeholder="Email Address"
          background={props.background}
          inputWidth={props.inputWidth}
          tabIndex={0}
          required
        />
        {props.showButton && (
          <>
            <Button tabIndex={0} type="submit">
              {isLoading
                ? t("home.email-section.loading-submit-button")
                : t("home.email-section.submit-button")}
            </Button>
            {isLoading ? <MaskInput /> : null}
          </>
        )}
        {props.showArrow && (
          <>
            <IconButton
              aria-label="Subscribe"
              className="icon"
              tabIndex={0}
              type="submit"
            >
              {!isLoading && <AiOutlineArrowRight />}
              {/* {isLoading && <MaskInput />} */}
              {isLoading && <BiLoaderAlt size={24} className="loader" />}
            </IconButton>
          </>
        )}
      </Wrapper>

      {apiResponse && (
        <Span className="msg" color="green">
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
  background: ${(props) => props.background || "#ffffff"};
  border-bottom: 1px solid ${(props) => props.border || "#ffffff"};
  padding: 5px 0px;
  justify-content: space-between;

  @media ${device.tablet} {
    column-gap: 3px;
  }
`;

const Button = styled.button`
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
`;

const SignupInputField = styled.input`
  all: unset;

  box-sizing: border-box;
  font-family: FK Grotesk Neue;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: normal;
  letter-spacing: -0.03em;
  color: #A5ABB8;
  background: ${(props) => props.background || "#ffffff"};
  // min-width: 220px;
  width: ${(props) => props.inputWidth || "100%"};
  // padding: 0px;
  // padding-left: 8px;

  @media ${device.laptop} {
    min-width: auto;
  }

  &:placeholder {
    color: #A5ABB8; 
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

const IconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  & svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: #dd44b9;
  }

  @keyframes loadingAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  & .loader {
    animation-name: loadingAnimation;
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;
