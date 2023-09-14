export const emailValidation = (userEmail) => {
  let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (pattern.test(userEmail)) {
    return true;
  } else {
    return false;
  }
};
export const PasswordValidation = (userPassword) => {
  let pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
  if (pattern.test(userPassword)) {
    return true;
  } else {
    return false;
  }
};
