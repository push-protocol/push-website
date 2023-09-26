// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";

import { BiLoaderAlt } from "react-icons/bi";

import { SpanV2 } from "@site/src/components/SharedStylingV2";
import useEmailValidationAndSend from "../../utils/useEmailValidationAndSend";

export type InputTextFieldProps = {
  placeholder?: string,
  value?: string,
};

function EmailInputTextField(props: InputTextFieldProps) {
  const [isLoading, apiResponse, emailError, onEmailSubmit] =
    useEmailValidationAndSend();

  return (
    <Box>
      <Wrapper onSubmit={onEmailSubmit}>
        <input
          type="text"
          name="email"
          placeholder={props.placeholder}
          tabIndex={0}
          required
        />
        <Button
          aria-label="Subscribe"
          className="icon"
          tabIndex={0}
          type="submit"
        >
          {!isLoading ? <AiOutlineArrowRight /> : null}
          {isLoading ? <MaskInput /> : null}
        </Button>

        {isLoading ? <BiLoaderAlt size={24} className="loader" /> : null}
      </Wrapper>
      {apiResponse && (
        <SpanV2 className="msg" color="#FFFFFF">
          {apiResponse}
        </SpanV2>
      )}
      {!apiResponse && emailError && (
        <SpanV2 className="msg" color="red">
          {emailError}
        </SpanV2>
      )}
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

const Button = styled.button`
    border: none;
`;

const Wrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 32px;
  border: 1px solid #2a2a39;
  background: transparent;
  padding: 14px 16px;

  & input[type="text"] {
    all: unset;

    width: 90%;
    box-sizing: border-box;

    font-family: "Strawford";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: normal;
    letter-spacing: -0.03em;
    color: #9c9cbe;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #121315 inset !important;
    -webkit-text-fill-color: #9c9cbe !important;
  }

  & .icon {
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;

    & svg {
      height: 1.5rem;
      width: 1.5rem;
      fill: #dd44b9;
    }
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

const MaskInput = styled.div`
  position: absolute;
  background: #121315;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 21px;
  opacity: 0.4;
  z-index: 10;
`;

export default EmailInputTextField;