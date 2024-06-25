// components/Header.js

import React from "react";
import SignInButton from "./SignInButton";

function Header({ user, message, checkAuthToken }) {
  return (
    <div className="w-full h-20 border border-b-2 flex justify-end items-center gap-4 p-4">
      {!user ? (
        <SignInButton />
      ) : (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={checkAuthToken}>Check Auth Token</button>
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
}

export default Header;
