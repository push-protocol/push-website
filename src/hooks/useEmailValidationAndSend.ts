/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';

const emailSuccessMsg = 'Thanks for subscribing!';

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function useEmailValidationAndSend() {
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function sendEmailToMailingList({ email }) {
    const details = {
      'name': 'Name',
      'email': email,
      'list': 'YPwxHS892tH8Nhs13wzKqWbQ',
      'api_key': 'TdzMcZVNTn1mjtAJHBpB',
      'boolean': true
    };
    
    let formBody = [];
    for (const property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    

    return fetch('https://tools.epns.io/sendy/subscribe', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
      .then(response => response.json())
      .then(jsondata => {
        // console.log(jsondata);
        return true;
      });
  }

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
        setEmailSuccess(emailSent);
      } catch (e) {
        setEmailError('Something went wrong!');
      } finally {
        setIsLoading(false);
      }
         
    } else {
      setEmailError('Invalid Email!');
    }
  };


  return [
    isLoading,
    emailSuccess,
    emailError,
    onEmailSubmit,
    emailSuccessMsg
  ];
}

export default useEmailValidationAndSend;