import {
  Button,
  Column,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { format } from "date-fns";
import * as React from "react";

type VisitProps = {
  firstName: string;
};

export default function Visit({ firstName }: VisitProps) {
  return (
    <Html>
      <Heading>Welcome, {firstName}!</Heading>
      <p>
        We are excited to have you join us at PCA Church Sydney. Please let us
        know which Sunday Service you would like to attend, and how many people
        in total will be attending.
        <br />
        <br />
        Our Service starts at 9:00am. Please ensure you arrive 15 minutes prior
        to the start of the service, so that we can welcome you and show you
        around.
        <br />
        <br />
        If you have any questions, feel free to reach out to us at any time
        using the contact information at the bottom of this email.
        <br />
        <br />
        We look forward to seeing you!
        <br />
        <br />
        Blessings,
        <br />
        PCA Church Sydney
        <br />
        pastor@pcachurchsydney.com
      </p>
    </Html>
  );
}
