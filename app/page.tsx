import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Home() {
  // const supabaseServerClient = createClient();
  // const { data: notes } = await supabaseServerClient.from("notes").select();

  // return <pre>{JSON.stringify(notes, null, 2)}</pre>;

  return (
    <div>
      <p>home</p>
      <Link href="/login">Login</Link>
    </div>
  );
}
