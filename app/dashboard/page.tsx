import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      Dashboard
      <UserButton />
    </div>
  );
};

export default page;
