import { Form } from "@/components/form";
import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createUser, getUser } from "services/user";

async function register(formData: FormData) {
  "use server";

  const email    = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user     = await getUser(email);

  if (user !== null) {
    return "User already exists"; // TODO: Handle errors with useFormStatus?
  }

  await createUser(email, password);
  redirect("/login");
}

export default function RegisterPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form action={register}>
          <SubmitButton>Sign Up</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Already have an account? "}
            <Link href="/login" className="font-semibold text-gray-800">
              Sign in
            </Link>
            {" instead."}
          </p>
        </Form>
      </div>
    </div>
  );
}
