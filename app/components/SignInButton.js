"use client";

import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";

const SignInButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const response = await fetch(
          "http://192.168.1.121:3000/google/redirect",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code: codeResponse.code }),
          }
        );
        const data = await response.json();
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/";
      } catch (error) {
        console.error("Error:", error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
    flow: "auth-code",
  });

  return (
    <GoogleLogin
      onClick={() => login()}
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default SignInButton;
