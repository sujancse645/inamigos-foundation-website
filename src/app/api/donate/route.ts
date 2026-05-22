import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const amount = formData.get("amount");
    const name = formData.get("name");
    const email = formData.get("email");
    const pan = formData.get("pan");

    console.log("Donation intent:", { amount, name, email, pan });

    return NextResponse.redirect(new URL("/donate?success=true", req.url), { status: 303 });
  } catch (error) {
    return NextResponse.redirect(new URL("/donate?error=true", req.url), { status: 303 });
  }
}
