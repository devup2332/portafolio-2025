import { Icon } from "@/types/svg";
import React from "react";

const PrismaIcon: React.FC<Icon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        fill="#00bfa5"
        d="m27.777 22.617l-.459-.946L18.43 3.26a2.25 2.25 0 0 0-1.914-1.256A2 2 0 0 0 16.379 2a2.23 2.23 0 0 0-1.891 1.042L4.348 19.056a2.2 2.2 0 0 0 .025 2.417l4.957 7.488A2.34 2.34 0 0 0 11.29 30a2.4 2.4 0 0 0 .655-.092l14.387-4.149a2.32 2.32 0 0 0 1.458-1.234a2.21 2.21 0 0 0-.013-1.908m-3.538.604l-11.268 3.25l4.075-19.033l7.568 15.671l-.376.098Z"
      />
    </svg>
  );
};

export default PrismaIcon;
