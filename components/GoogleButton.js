"use client";
import { useRouter } from "next/navigation";
import React from "react";

function GoogleButton() {
  const router = useRouter();
  return (
    <button
      onClick={router.push("http://192.168.1.121:3000/google")}
      className="flex p-2 border border-gray-400 text-bold text-black rounded-full gap-2"
    >
      <img
        src="google.png"
        className="w-6 h-6 flex justify-center items-center"
      ></img>
      <span className="">Sign in with Google</span>
    </button>
  );
}

export default GoogleButton;
