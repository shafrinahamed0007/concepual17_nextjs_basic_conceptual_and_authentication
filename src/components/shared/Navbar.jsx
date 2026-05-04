"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="border p-5 bg-zing-700 ">
      <div className="flex gap-5 justify-center">
        <Link href={"/models"}>Models</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/signup"}>Register</Link>
        <Link href={"/signin"}>Login</Link>
        <div>
          {user?.name}
        </div>
        <Button onClick={handleSignOut} variant="danger">
          SignOut
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
