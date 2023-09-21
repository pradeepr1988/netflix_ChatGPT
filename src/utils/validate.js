export const ValidateSignInForm = (email, password, confirmPassword) => {
  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const isSameConfirmPassword = password === confirmPassword;
  if (!isValidEmail) return 'Email is not valid';
  if (!isValidPassword) return 'Password is not valid';
  if (!isSameConfirmPassword)
    return 'Password and confirm Password has Mismatch';
  return null;
};
