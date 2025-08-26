import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}>
        <Image src="/logo.svg" alt="Logo" width={74} height={29} />
      </Link>
      <div className="flexCenter gap-12 max-lg:hidden">
        {NAV_LINKS.map(({ href, key, label }) => (
          <Link
            key={key}
            href={href}
            className="regular-16 text-gray-50 transition-colors hover:text-gray-90"
          >
            {label}
          </Link>
        ))}
      </div>
      <Link
        href={"/login"}
        className="px-6 py-2 bg-primary text-white rounded-full bg-gray-90 flexCenter gap-2 max-lg:hidden"
      >
        <Image src="/user.svg" alt="Login" width={16} height={16} />
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
