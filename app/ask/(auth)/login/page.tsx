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
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4 sm:p-8 lg:p-16">
      <div
        className="flex flex-col-reverse items-end justify-between gap-2 rounded-lg bg-white p-8 shadow-lg 
                  md:flex-row md:gap-4 md:p-12 lg:gap-8 lg:p-16"
      >
        <div className="flex flex-col   items-center text-center w-full md:items-center md:text-left md:w-1/2 ">
          <div className="w-full md:w-1/2 mb-4  hidden  md:flex items-center  justify-center ">
            <Image
              src="/images/ask-icon.svg"
              alt="My Image"
              width={74}
              height={74}
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-zinc-50 my-4 self-center md:self-start ">
            Sign In
          </h3>
          <h4 className="text-sm text-gray-600 dark:text-zinc-400 mb-6 font-bold self-start ">
            Sign in with your email and password to explore all available
            features.
          </h4>

          <AuthForm action={handleSubmit} defaultEmail={email}>
            <SubmitButton>Sign in</SubmitButton>
          </AuthForm>

          <div className="flex items-center justify-center w-full mt-4">
            <hr className="grow border-t border-gray-300 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <span className="mx-4 text-gray-500 font-medium text-base">or</span>
            <hr className="grow border-t border-gray-300 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>

          <p className="text-sm text-gray-600 dark:text-zinc-400  mt-2  lg:mb-12 text-center self-center">
            {"Don't have an account? "}
            <Link
              href="/ask/register"
              className="font-semibold text-blue-600 hover:underline"
            >
              Sign up
            </Link>
            {" for free."}
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/illustration.svg"
            alt="My Image"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
