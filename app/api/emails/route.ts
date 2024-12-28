import { Resend } from "resend";
import Visit from "../../components/emails/Visit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, firstName } = await request.json();
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirmation to Plan Your Visit",
    react: Visit({ firstName }),
  });
}
