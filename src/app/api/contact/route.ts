import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // In a real application, you would send this to a database or an email service
    console.log("Contact form submission:", { name, email, subject, message });

    // Redirect to a success page or back with a success query param
    return NextResponse.redirect(new URL("/contact?success=true", req.url), { status: 303 });
  } catch (error) {
    return NextResponse.redirect(new URL("/contact?error=true", req.url), { status: 303 });
  }
}
