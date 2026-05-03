import Link from "next/link";
import React from "react";

const Navbar = async () => {
  return (
    <div className="border p-5 bg-zing-700 ">
      <div className="flex gap-5 justify-center">
        <Link href={"/models"}>Models</Link>
        <Link href={"/"}>Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
