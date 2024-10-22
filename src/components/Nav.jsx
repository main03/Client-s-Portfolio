"use client"; // Add this at the very top
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "my projects",
  },
  {
    path: "/contact",
    name: "contact",
  },
];
const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((activeLink, index) => {
        return (
          <Link
            href={activeLink.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {activeLink.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              ></motion.span>
            )}

            {activeLink.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
