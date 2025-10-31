import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  label: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, label, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter cursor-pointer rounded-full gap-3 border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={label} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap">{label}</span>
    </button>
  );
};

export default Button;
