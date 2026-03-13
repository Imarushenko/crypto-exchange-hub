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
      totalClicks,
      clicksByExchange,
      clicksByCountry,
      recentClicks,
    });
  } catch (error) {
    console.error("failed to fetch stats", error);

    return NextResponse.json(
      { error: "failed to fetch stats" },
      { status: 500 }
    );
  }
}