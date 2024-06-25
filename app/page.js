// app/page.js

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const checkAuthToken = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      console.log("Not authenticated");
      return;
    }

    try {
      const response = await axios.get("http://192.168.1.121:3000/user/hi", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  return (
    <div>
      <Header user={user} message={message} checkAuthToken={checkAuthToken} />
    </div>
  );
};

export default HomePage;
