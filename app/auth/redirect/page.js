// app/auth/redirect/page.js

"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const RedirectPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const code = searchParams.get("code");

      if (code) {
        try {
          const response = await fetch(
            "http://192.168.1.201:3000/google/redirect",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ code }),
            }
          );
          const data = await response.json();
          localStorage.setItem("accessToken", data.access_token);
          localStorage.setItem("user", JSON.stringify(data.user));

          // Redirect to the home page or any other page
          router.push("/");
        } catch (error) {
          console.error("Error fetching auth token:", error);
        }
      }
    };

    fetchData();
  }, [router, searchParams]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;
