import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import HomeHeader from "@/components/HomeHeader";

export default async function Home() {
  return (
    <div>
      {/* <Link href="/login">Login</Link> */}

      <HomeHeader />
    </div>
  );
}
