import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import Click from "@/models/Click";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectMongo();

    const created = await Click.create({
      exchange: body.exchange,
      country: body.country,
      timestamp: body.timestamp,
    });

    return NextResponse.json({
      success: true,
      id: created._id?.toString?.() ?? "",
    });
  } catch (error) {
    console.error("click api error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "failed to save click",
      },
      { status: 500 }
    );
  }
}