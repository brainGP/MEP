import React from "react";
import { signIn } from "next-auth/react";
import GoogleButton from "./GoogleButton";
function Header() {
  return (
    <div className="w-full h-20 border border-b-2 flex justify-end items-center gap-4 p-4">
      {/* <button>register</button>
      <div className="flex p-2 border border-gray-600 text-bold text-black rounded-full gap-2">
        <img
          src="google.png"
          className="w-6 h-6 flex justify-center items-center"
        ></img>
        <button onClick={() => {}} className="">
          Sign in with Google
        </button> */}
      {/* </div>
       */}
      <GoogleButton />
    </div>
  );
}

export default Header;

// () => signIn("google")
