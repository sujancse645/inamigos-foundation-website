import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const interest = formData.get("interest");
    const message = formData.get("message");

    console.log("Volunteer application:", { name, email, phone, interest, message });

    return NextResponse.redirect(new URL("/volunteer?success=true", req.url), { status: 303 });
  } catch (error) {
    return NextResponse.redirect(new URL("/volunteer?error=true", req.url), { status: 303 });
  }
}
