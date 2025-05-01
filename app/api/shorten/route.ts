import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.API_URL;

export async function POST(request: NextRequest) {
    const data = await request.json();

    try {
        const res = await fetch(`${API_URL}/api/shorten`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                original_url: data.long_url,
            }),
        });

        if (res.ok) {
            const result = await res.json();
            return NextResponse.json(result);
        } else {
            throw new Error("Failed to shorten the link");
        }
    } catch (error: any) {
        return NextResponse.json(
            { status: "error", message: error.message },
            { status: 400 }
        );
    }
}
