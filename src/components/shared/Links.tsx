"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link
          href="/"
          className={`rounded-xl px-4 py-2 text-sm ${
            pathname === "/" ? "bg-[#1A2312] text-[#C2F800]" : "text-[#9CA3AF]"
          }`}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={`rounded-xl px-4 py-2 text-sm ${
            pathname === "/my-plan"
              ? "bg-[#1A2312] text-[#C2F800]"
              : "text-[#9CA3AF]"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );
};

export default Links;
