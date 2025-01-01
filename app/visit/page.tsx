"use client";

import { Email } from "@mui/icons-material";
import styles from "./page.module.css";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  firstName: z.string().min(2, {
    message: "Please enter a valid first name",
  }),
});

export default function Visit() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.email);
    console.log(values.firstName);

    fetch("../api/emails", {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        firstName: values.firstName,
      }),
    });

    
  }

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.herocentre}>
          <div />
          <div className={styles.herotitle}>
            <p className={styles.herotitletext}>Plan A Visit</p>
          </div>
          <div />
        </div>
      </div>
      <div className={styles.visitContainer}>
        <div className={styles.visitCentre}>
          <div className={styles.visitblurb}>
            <div className={styles.blurbcontainer}>
              <p>
                We are excited to have you join us. We are a church that is
                passionate about seeing people come to know Jesus and grow in
                their relationship with Him. We believe that church is more than
                just a place to attend, but a community that helps you grow in
                your faith.
              </p>
            </div>
            <div className={styles.addresscontainer}>
              <div className={styles.addresscontentleft}>
                <div className={styles.addresscontentlefttitle}>
                  <p>Service Times</p>
                </div>
                <div className={styles.addresscontentlefttext}>
                  <p>Sunday Service: 9am - 11:30am</p>
                  <p>Sunday School: 11:30am - 12pm</p>
                </div>
              </div>
              <div className={styles.addresscontentright}>
                <div className={styles.addresscontentrighttitle}>
                  <p>Location</p>
                </div>
                <div className={styles.addresscontentrighttext}>
                  <p>7/79 Williamson Road</p>
                  <p>Ingleburn, NSW, 2565</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.visitcontent}>
            <div className={styles.visitcontenttitle}>
              <p>What to Expect</p>
            </div>
            <div className={styles.visitcontenttext}>
              <p>
                Our Sunday Service is about two and a half hours long. The
                service includes worship, prayer, and messages from the Bible.
                We also have a Sunday School for children that runs after the
                Sunday Service which is about 30 minutes long, catering to all
                children and youth.
                <br />
                <br />
                The service including the sermon is in Malayalam, but if you are
                unable to understand the language, please feel free to ask for a
                translator, who will translate the sermon into English for you.
                <br />
                <br />
                There is a section in the service dedicated to children, where
                they will receieve a short message <b>{"(in English)"}</b> and
                will given the opportunity to say their memory verses and sing a
                song. If your child is shy, they are welcome to sit with you
                during this time.
                <br />
                <br />
              </p>
            </div>
            <hr style={{ marginBottom: "10px" }} />
            {/* <div
              style={{
                maxWidth: "500px",
                margin: "0 auto",
                marginBottom: "20px",
              }}
            >
              <h1
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                Visit Form
              </h1>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enter your First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                  <FormDescription>Please check your emails for a confirmation once you press "Submit"</FormDescription>
                </form>
              </Form>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
