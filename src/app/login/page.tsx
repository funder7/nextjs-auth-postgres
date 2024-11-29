import { Form } from '@/components/form';
import { SubmitButton } from '@/components/submit-button';
import { signIn } from 'auth';
import Link from 'next/link';

 async function login(formData: FormData) {
   "use server";

   await signIn("credentials", {
     redirectTo: "/protected",
     username: formData.get("email") as string,
     password: formData.get("password") as string,
   });
 }


export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>
        <Form action={login}>
          <SubmitButton>Sign in</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="/register" className="font-semibold text-gray-800">
              Sign up
            </Link>
            {' for free.'}
          </p>
        </Form>
      </div>
    </div>
  );
}