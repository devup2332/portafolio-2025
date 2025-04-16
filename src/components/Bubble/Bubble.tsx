import React from "react";
import { cn } from "../../utils/cn";

type Props = {
  color: string;
  className?: string;
};

const Bubble: React.FC<Props> = ({ className, color }) => {
  return (
    <div
      className={cn("w-[800px] -z-10 h-[800px]", className)}
      style={{
        background: color,
      }}
    />
  );
};

export default Bubble;
