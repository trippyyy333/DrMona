// // components/Navbar.tsx
// import React from "react";
// import Link from "next/link";
// const Navbar = () => {
  
//   return (
//     <div className="navbar bg-base-100">
//       <div className="flex-1">
//         <a className="btn btn-ghost normal-case text-xl">My Website</a>
//       </div>
//       <div className="flex-none">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//           <li>
//             <Link href="/gallery">Gallery</Link>
//           </li>
//             <li><Link href="/gallery2">Gallery2</Link>
//             </li></ul>
      

//       </div>


//     </div>
//   );
// };
// export default Navbar;
import { menuItems } from '../pages/menuItems';
import MenuItems from './MenuItems';
const depthLevel = 0;

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
      {menuItems.map((menu, index) => {
    const depthLevel = 0;
    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;