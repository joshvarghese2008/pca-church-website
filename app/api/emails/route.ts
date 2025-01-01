import { Resend } from "resend";
import Visit from "../../components/emails/Visit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, firstName } = await request.json();
  await resend.emails.send({
    from: "pastor@pcachurchsydney.com",
    to: email,
    subject: "Confirmation to Plan a Visit for" + firstName,
    react: Visit({ firstName }),
  });
}
