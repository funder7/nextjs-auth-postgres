import { auth, signOut } from "auth";

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="text-stone-400 hover:text-stone-200 hover:no-underline rounded-md border mt-4 py-2 px-4 transition-all">
        Sign out
      </button>
    </form>
  );
}

export default async function ProtectedPage() {
  const session = await auth();

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        You are logged in as {session?.user?.email}
        <SignOut />
      </div>
    </div>
  );
}
