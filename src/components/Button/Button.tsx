import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";

const variants = cva(
  "outline-none h-10 cursor-pointer px-6 border-none text-sm rounded-md",
  {
    variants: {
      variant: {
        primary:
          "bg-linear-1 from-[#1A46F5] to-[#04229A] text-white bg-gradient-to-b hover:from-[#365df7] transition-all",
        ghost: "bg-transparent text-white",
      },
    },
  },
);

interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof variants> {}

const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  className,
  ...other
}) => {
  return (
    <button className={cn(variants({ variant, className }))} {...other}>
      {children}
    </button>
  );
};

export default Button;
