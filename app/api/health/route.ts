import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectMongo } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectMongo();

    return NextResponse.json({
      ok: true,
      readyState: mongoose.connection.readyState,
      dbName: mongoose.connection.name,
    });
  } catch (error) {
    console.error("health api error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "unknown error",
      },
      { status: 500 }
    );
  }
}