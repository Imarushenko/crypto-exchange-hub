import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import Click from "@/models/Click";

export async function GET() {
  try {
    await connectMongo();

    const [clicksByExchange, clicksByCountry, totalClicks, recentClicks] =
      await Promise.all([
        Click.aggregate([
          {
            $group: {
              _id: "$exchange",
              clicks: { $sum: 1 },
            },
          },
          {
            $sort: { clicks: -1 },
          },
        ]),
        Click.aggregate([
          {
            $group: {
              _id: "$country",
              clicks: { $sum: 1 },
            },
          },
          {
            $sort: { clicks: -1 },
          },
        ]),
        Click.countDocuments(),
        Click.find({})
          .sort({ createdAt: -1 })
          .limit(10)
          .lean(),
      ]);

    return NextResponse.json({
      totalClicks: totalClicks ?? 0,
      clicksByExchange: clicksByExchange ?? [],
      clicksByCountry: clicksByCountry ?? [],
      recentClicks: recentClicks ?? [],
    });
  } catch (error) {
    console.error("failed to fetch stats", error);

    return NextResponse.json({
      totalClicks: 0,
      clicksByExchange: [],
      clicksByCountry: [],
      recentClicks: [],
      error: "failed to fetch stats",
    });
  }
}