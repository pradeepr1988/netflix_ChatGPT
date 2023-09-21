import React, { useRef, useState } from 'react';
import { ValidateSignInForm } from '../utils/validate';

const Form = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  const handleClick = () => {
    const validationMessage = ValidateSignInForm(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationMessage);
  };

  return (
    <form
      onClick={(e) => {
        e.preventDefault();
      }}
      className="md:w-3/12 w-[90%] absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white  rounded-lg bg-opacity-80"
    >
      <h1 className="font-bold text-3xl py-2">
        {showSignUpForm ? 'Sign Up' : 'Sign In'}
      </h1>
      <input
        ref={email}
        type="text"
        placeholder="Enter your Email Address"
        className="p-4 my-4 w-full bg-gray-700  rounded-lg"
      />
      <input
        ref={password}
        type="password"
        placeholder="Enter your Password"
        className="p-4 my-4 w-full bg-gray-700  rounded-lg"
      />
      {showSignUpForm && (
        <input
          type="password"
          placeholder="Confirm your Password"
          className="p-4 my-4 w-full bg-gray-700  rounded-lg"
        />
      )}
      {errorMessage && (
        <p className="font-bold text-red-700 text-lg">* {errorMessage}</p>
      )}
      <button
        className="p-4 my-6 rounded-lg bg-red-700 w-full"
        onClick={handleClick}
      >
        {showSignUpForm ? ' Sign Up' : 'Sign In'}
      </button>
      <p className="cursor-pointer hover:underline" onClick={toggleSignForm}>
        {showSignUpForm
          ? 'Already have Account? Sign in'
          : 'New Registered ? SignUp'}
      </p>
    </form>
  );
};

export default Form;
