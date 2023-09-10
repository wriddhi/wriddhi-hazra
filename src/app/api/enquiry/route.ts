import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const headers = request.headers;
  // do something with body

//   console.log(body);
  console.log(headers);

  return NextResponse.json({ hello: "world" });
}
