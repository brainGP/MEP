"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
      >
        Google ашиглан үргэлжлүүлэх
      </button>
    </div>
  );
}
