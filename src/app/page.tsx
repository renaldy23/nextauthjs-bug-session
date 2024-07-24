"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex h-screen flex-col items-center">
      <button
        className="px-4 py-2 bg-blue-400"
        onClick={async () => await signIn()}
      >
        Sign In
      </button>
      <button
        className="mt-2 px-4 py-2 bg-purple-400"
        onClick={() => router.push("/profile")}
      >
        Change Page (Server)
      </button>
      <button
        className="mt-2 px-4 py-2 bg-teal-400"
        onClick={() => router.push("/profile_client")}
      >
        Change Page (Client)
      </button>
    </main>
  );
}
