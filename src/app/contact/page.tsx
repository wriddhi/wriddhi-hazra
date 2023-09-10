"use client";

import MotionSection from "@/components/MotionSection";
import React, { useState } from "react";
import { VscSend } from "react-icons/vsc";

import { z, ZodError } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Your name can't have less than 3 letters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(50, { message: "Explain your enquiry in bit more details" }),
});

const Error = ({ children }: { children: React.ReactNode }) => (
  <span className="text-red-600 font-machina text-xs lg:text-sm mb-2 w-full">
    {children}
  </span>
);

export default function Contact() {
  const [user, setUser] = useState<z.infer<typeof schema>>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof user, string | undefined>>
  >({
    name: undefined,
    email: undefined,
    message: undefined,
  });

  const handleUserChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log("length = ", value.length);
    setUser((prev) => ({ ...prev, [name]: value }));
    try {
      schema.parse(user);
    } catch (err) {
      if (err instanceof ZodError) {
        console.log(err.issues);
        const issue = err.issues.filter((issue) => issue.path[0] === name)[0];
        setErrors((prev) => ({ ...prev, [name]: issue?.message }));
      }
      return;
    }

    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleInquiry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      schema.parse(user);
    } catch (err) {
      if (err instanceof ZodError) {
        console.log(err.issues);
        err.issues.forEach((issue) => {
          const name = issue.path[0];
          setErrors((prev) => ({ ...prev, [name]: issue?.message }));
        });
      }
      return;
    }

    setUser({ name: "", email: "", message: "" });

    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <main className="h-full w-full flex flex-col justify-start items-center mt-10">
      <MotionSection>
        <h1 className="bg-gradient-to-br from-white to-slate-900 bg-clip-text text-transparent text-5xl lg:text-8xl font-semibold ">
          Get in Touch
        </h1>
      </MotionSection>
      <MotionSection className="w-[80vw] lg:w-[32rem]" override={true} delay={0.2}>
        <form
          className="my-10 w-full flex flex-col justify-start items-center gap-2"
          onSubmit={handleInquiry}
        >
          <input
            id="name"
            name="name"
            title="Name"
            type="text"
            placeholder="Your Name"
            value={user.name}
            onChange={handleUserChange}
            required
            formNoValidate
            className="rounded-lg w-full h-12 p-3 outline-none bg-white/10 text-violet-200"
          />
          <Error>{errors.name}</Error>
          <input
            id="email"
            name="email"
            title="Email"
            type="email"
            placeholder="Your Email Address"
            value={user.email}
            onChange={handleUserChange}
            required
            formNoValidate
            className="rounded-lg w-full h-12 p-3 outline-none bg-white/10 text-violet-200"
          />
          <Error>{errors.email}</Error>
          <textarea
            id="message"
            name="message"
            title="Message"
            minLength={50}
            maxLength={500}
            placeholder="Your Message"
            value={user.message}
            onChange={handleUserChange}
            required
            className="rounded-lg w-full min-h-[10rem] h-48 p-3 outline-none bg-white/10 text-violet-200"
          />
          {errors.message && (
            <Error>{`${errors.message} (${user.message.length} / 50)`}</Error>
          )}
          <button
            type="submit"
            className="rounded-lg w-full mt-2 h-12 px-3 bg-slate-400 focus:bg-slate-300 hover:bg-slate-300 transition-all text-black font-machina font-semibold"
          >
            Send Enquiry <VscSend className="ml-2 inline text-2xl" />
          </button>
        </form>
      </MotionSection>
    </main>
  );
}
