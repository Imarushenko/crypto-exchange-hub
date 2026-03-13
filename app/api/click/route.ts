import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import Click from "@/models/Click";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectMongo();

    await Click.create({
      exchange: body.exchange,
      country: body.country,
      timestamp: body.timestamp,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}