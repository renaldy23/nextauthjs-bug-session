"use client";
import { auth } from "@/lib/auth";
import { useEffect } from "react";

export default function Page() {
  const fetchProfile = async () => {;
    const result = await fetch("/api/profile/data", {
      cache: "no-store",
    });
    return await result.json();
  };
  useEffect(() => {
    fetchProfile().then((data) => {
      console.log(data);
    });
    return () => {};
  }, []);

  return <h1>Profile Page (Client)</h1>;
}
