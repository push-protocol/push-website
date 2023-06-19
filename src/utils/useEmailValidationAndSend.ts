/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import { sendEmailToMailingList } from './globals';

const MESSAGES = {
  SUCCESS: 'Thanks for subscribing!',
  ERROR: 'Something went wrong!',
  REPEAT: 'Already subscribed!',
  INVALID: 'Invalid Email!'
};

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function useEmailValidationAndSend() {
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const onEmailSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    // console.log(formData.email);

    if (validateEmail(formData.email)) {
      try {   
        setIsLoading(true);
        const sendyAPIResponse = await sendEmailToMailingList({
          email: formData.email,
          name: formData.email
        });

        // check https://sendy.co/api for details
        if (sendyAPIResponse.toString() === '1') {
          setEmailSuccess(MESSAGES.SUCCESS);
        } else {
          setEmailSuccess('');
          setEmailError(sendyAPIResponse);
        }
      } catch (e) {
        setEmailSuccess('');
        setEmailError(MESSAGES.ERROR);
        console.log('emailSent error: ', e);
      } finally {
        setIsLoading(false);
      }
         
    } else {
      setEmailSuccess('');
      setEmailError(MESSAGES.INVALID);
    }
  };


  return [
    isLoading,
    emailSuccess,
    emailError,
    onEmailSubmit
  ];
}

export default useEmailValidationAndSend;