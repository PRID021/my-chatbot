"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { AuthForm } from "@/components/custom/auth-form";
import { SubmitButton } from "@/components/custom/submit-button";

import { login, LoginActionState } from "../actions";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const [state, formAction] = useActionState<LoginActionState, FormData>(
    login,
    {
      status: "idle",
    }
  );

  useEffect(() => {
    if (state.status === "failed") {
      toast.error("Invalid credentials!");
    } else if (state.status === "invalid_data") {
      toast.error("Failed validating your submission!");
    } else if (state.status === "success") {
      router.refresh();
    }
  }, [state.status, router]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get("email") as string);
    formAction(formData);
  };

  return (
    <div className="w-screen md:h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 sm:p-8 lg:p-16">
      <div
        className="flex flex-col-reverse items-end justify-between gap-2 rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg 
              md:flex-row md:gap-4 md:p-12 lg:gap-8 lg:p-16 h-full"
      >
        <div className="flex flex-col size-full items-center md:justify-between text-center md:items-center md:text-left md:w-1/2">
          <div className="w-full md:w-1/2 mb-4 hidden md:flex items-center justify-center">
            <Image
              src="/images/ask-icon.svg"
              alt="Ask Icon"
              width={74}
              height={74}
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 my-4 self-center md:self-start">
            Sign In
          </h3>
          <h4 className="text-sm text-gray-600 dark:text-gray-400 font-bold self-start">
            Sign in with your email and password to explore all available
            features.
          </h4>

          <AuthForm action={handleSubmit} defaultEmail={email}>
            <SubmitButton>Sign in</SubmitButton>
          </AuthForm>

          <div className="flex items-center justify-center w-full">
            <hr className="grow border-t border-gray-300 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <span className="mx-4 text-gray-500 dark:text-gray-400 font-medium text-base">
              or
            </span>
            <hr className="grow border-t border-gray-300 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center self-center">
            {"Don't have an account? "}
            <Link
              href="/ask/register"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Sign up
            </Link>
            {" for free."}
          </p>
        </div>

        <div className="size-full md:w-1/2 flex justify-center items-center ">
          <Image
            src="/images/illustration.svg"
            alt="Illustration"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
