import { auth } from "@/lib/auth";

async function getProfileData() {
  const result = await fetch("http://localhost:3000/api/profile/data", {
    cache: "no-store",
  });
  return await result.json();
}

export default async function Page() {
  const session = await auth();
  console.log("current authenticated in server component: ", session?.user);
  const data = await getProfileData();
  return <h1>Profile Page</h1>;
}
