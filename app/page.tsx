import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  // const supabaseServerClient = createClient();
  // const { data: notes } = await supabaseServerClient.from("notes").select();

  // return <pre>{JSON.stringify(notes, null, 2)}</pre>;

  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  if (userId) {
    // Query DB for user specific information or display assets only to signed in users
    console.log("user signed in");
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  console.log(user);
  // Use `user` to render user details or create UI elements

  return (
    <div>
      <p>home</p>
      {/* <Link href="/login">Login</Link> */}

      <SignInButton>
        <Button className="bg-yellow-200 text-slate-800 hover:bg-yellow-400">
          Login
        </Button>
      </SignInButton>
    </div>
  );
}
