import React from "react";
import items from "./menu";
import Link from "next/link";
// import ""
const Navbar = () => {
  return (
    // <div>Navbar</div>
    <div>
      <ul>
        {items.map((value, index) => (
          <li key={value}>
            <Link href={`/${value}`}>
              <span>#</span>
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
