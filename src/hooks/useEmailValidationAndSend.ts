/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import { sendEmailToMailingList } from '../api';

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
        const emailSent = await sendEmailToMailingList({
          email: formData.email,
          name: formData.email
        });

        console.log('emailSent: ', emailSent);

        setEmailSuccess(emailSent);
      } catch (e) {
        setEmailError(MESSAGES.ERROR);
        console.log('emailSent error: ', e);
      } finally {
        setIsLoading(false);
      }
         
    } else {
      setEmailError(MESSAGES.INVALID);
    }
  };


  return [
    isLoading,
    emailSuccess,
    emailError,
    onEmailSubmit,
    MESSAGES.SUCCESS,
  ];
}

export default useEmailValidationAndSend;