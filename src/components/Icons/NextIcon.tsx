import { Icon } from "@/types/svg";
import React from "react";

const NextIcon: React.FC<Icon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M16 2a14 14 0 1 0 5.816 26.723L12 14v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.434a1 1 0 0 1 .857.486l11.491 19.15A14 14 0 0 0 16 2m8 16h-4V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z" />
    </svg>
  );
};

export default NextIcon;
