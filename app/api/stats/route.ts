import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import Click from "@/models/Click";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectMongo();

    const totalClicks = await Click.countDocuments();

    const clicksByExchange = await Click.aggregate([
      {
        $group: {
          _id: "$exchange",
          clicks: { $sum: 1 },
        },
      },
      {
        $sort: { clicks: -1 },
      },
    ]);

    const clicksByCountry = await Click.aggregate([
      {
        $group: {
          _id: "$country",
          clicks: { $sum: 1 },
        },
      },
      {
        $sort: { clicks: -1 },
      },
    ]);

    const recentClicks = await Click.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    return NextResponse.json({
      totalClicks: totalClicks ?? 0,
      clicksByExchange: clicksByExchange ?? [],
      clicksByCountry: clicksByCountry ?? [],
      recentClicks: (recentClicks ?? []).map((item: any) => ({
        _id: item._id?.toString?.() ?? "",
        exchange: item.exchange ?? "",
        country: item.country ?? "",
        timestamp: item.timestamp ?? 0,
        createdAt: item.createdAt ?? null,
      })),
    });
  } catch (error) {
    console.error("stats api error:", error);

    return NextResponse.json(
      {
        totalClicks: 0,
        clicksByExchange: [],
        clicksByCountry: [],
        recentClicks: [],
        error:
          error instanceof Error ? error.message : "failed to fetch stats",
      },
      { status: 500 }
    );
  }
}