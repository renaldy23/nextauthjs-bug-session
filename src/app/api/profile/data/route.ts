import { auth } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await auth();
  console.log("current authenticated in api handler : ", session?.user);

  return Response.json({ message: "hi profile" });
}
