import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 bg-white">
      <Link href={"/"}>
        <Image src="/logo.svg" alt="Logo" width={74} height={29} />
      </Link>
      <ul className="flex items-center gap-12 pb-1.5 max-lg:hidden">
        {NAV_LINKS.map(({ href, key, label }) => (
          <Link
            key={key}
            href={href}
            className="regular-16 text-gray-50 transition-colors hover:text-gray-90"
          >
            {label}
          </Link>
        ))}
      </ul>
      <Link href={"/login"} className="flex items-center max-lg:hidden">
        <Button
          type="button"
          label="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </Link>
      <div className="lg:hidden cursor-pointer">
        <Image src="/menu.svg" alt="Menu" width={28} height={28} />
      </div>
    </nav>
  );
};

export default Navbar;
