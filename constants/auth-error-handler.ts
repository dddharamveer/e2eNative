export const authErrorHandler = (error: string) => {
  if (error.includes("auth/user-not-found")) {
    return "User not found";
  } else if (error.includes("auth/wrong-password")) {
    return "Wrong password";
  } else if (error.includes("auth/email-already-in-use")) {
    return "Email already in use";
  } else if (error.includes("auth/invalid-email")) {
    return "Invalid email";
  } else if (error.includes("auth/weak-password")) {
    return "Weak password";
  }
  return "Unknown error";
};
