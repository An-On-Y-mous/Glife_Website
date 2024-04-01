import React from "react";
import Link from "next/link";
import "../navbar/navbar.css"
const Navbar = () => {
  return (
    <div className="parent">
      <div className="logo">
        <Link href="/">
          <img src="/glife-removebg-preview.png" alt="logo" />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/men">Men</Link>
          </li>
          <li>
            <Link href="/women">Women</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
