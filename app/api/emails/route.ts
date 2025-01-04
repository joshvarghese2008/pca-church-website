import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import Visit from "../../components/emails/Visit";
import { format } from "date-fns";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email, firstName } = await request.json();

  if (!email || !firstName) {
    return NextResponse.json("Missing email or firstName", { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "pastor@pcachurchsydney.com",
      to: email,
      bcc: "pastor@pcachurchsydney.com",
      subject: "Plan A Visit for " + firstName,
      react: Visit({ firstName }),
    });
    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
