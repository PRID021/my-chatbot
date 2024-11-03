import Form from "next/form";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function AuthForm({
  action,
  children,
  defaultEmail = "",
}: {
  action: any;
  children: React.ReactNode;
  defaultEmail?: string;
}) {
  return (
    <Form action={action} className="flex flex-col gap-8 w-full ">
      <div className="flex flex-col gap-4">
        <Label
          htmlFor="email"
          className="text-zinc-600 dark:text-zinc-400 font-normal self-start "
        >
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          className="bg-gray-100 dark:bg-gray-700 text-md md:text-sm border border-gray-300 dark:border-gray-600 rounded-md p-2"
          type="email"
          placeholder="user@acme.com"
          autoComplete="email"
          required
          defaultValue={defaultEmail}
        />

        <Label
          htmlFor="password"
          className="text-zinc-600 dark:text-zinc-400 font-normal self-start "
        >
          Password
        </Label>
        <Input
          id="password"
          name="password"
          className="bg-gray-100 dark:bg-gray-700 text-md md:text-sm border border-gray-300 dark:border-gray-600 rounded-md p-2"
          type="password"
          required
        />
      </div>

      {children}
    </Form>
  );
}
