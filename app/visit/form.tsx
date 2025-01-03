"use client";

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

export default function VisitForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.email);
    console.log(values.firstName);

    fetch("../api/emails", {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        firstName: values.firstName,
      }),
    });

    try {
      const response = await fetch("../api/emails", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          firstName: values.firstName,
        }),
      });
      if (response.ok) {
        alert("Email sent successfully");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
    <div
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          <FormDescription>
            Please check your emails for a confirmation once you press "Submit"
          </FormDescription>
        </form>
      </Form>
      {/* <button onClick={() => toast({title: "Toasted"})}>Log</button> */}
    </div>
  );
}
