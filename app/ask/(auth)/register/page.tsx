"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { AuthForm } from "@/components/custom/auth-form";
import { SubmitButton } from "@/components/custom/submit-button";

import { register, RegisterActionState } from "../actions";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [state, formAction] = useActionState<RegisterActionState, FormData>(
    register,
    {
      status: "idle",
    }
  );

  useEffect(() => {
    if (state.status === "user_exists") {
      toast.error("Account already exists");
    } else if (state.status === "failed") {
      toast.error("Failed to create account");
    } else if (state.status === "invalid_data") {
      toast.error("Failed validating your submission!");
    } else if (state.status === "success") {
      toast.success("Account created successfully");
      router.refresh();
    }
  }, [state, router]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get("email") as string);
    formAction(formData);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4 sm:p-8 lg:p-16">
      <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md rounded-lg bg-white p-8 shadow-lg md:p-12 lg:p-16">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-zinc-50 mb-2">
          Sign Up
        </h3>
        <p className="text-sm text-gray-600 dark:text-zinc-400 mb-6">
          Create an account with your email and password
        </p>

        <AuthForm action={handleSubmit} defaultEmail={email}>
          <SubmitButton>Sign Up</SubmitButton>
        </AuthForm>

        {/* Divider */}
        <div className="flex items-center justify-center w-full my-4">
          <hr className="grow border-t border-gray-300 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <span className="mx-4 text-gray-500 font-medium text-base">or</span>
          <hr className="grow border-t border-gray-300 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>

        <p className="text-sm text-gray-600 dark:text-zinc-400 text-center">
          {"Already have an account? "}
          <Link
            href="/ask/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign in
          </Link>
          {" instead."}
        </p>
      </div>
    </div>
  );
}
