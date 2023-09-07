"use client";
import Link from "next/link";
import Image from "next/image";

import { Button, Tooltip } from "@chakra-ui/react";

function NavBar() {
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={168}
            height={0}
            className="object-contain"
          />
        </Link>

        <Tooltip
          hasArrow
          label={"Demo Sign-In Button"}
          className="bg-gray-600 text-white text-xs px-2 py-1 rounded"
          placement="auto"
          closeOnClick={false}
        >
          <Button className="xl:text-blue-50 text-blue-700 opacity-50 cursor-default">
            Sign In
          </Button>
        </Tooltip>
      </nav>
    </header>
  );
}

export default NavBar;
