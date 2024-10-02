// import React, { useState } from "react";

// import arrow from "../images/arrowDown.svg";
// import Menu from "./Menu";

// export default function Header() {
//   const [menu, setMenu] = useState(false);
//   const [search, setSearch] = useState(false);
//   return (
//     <header>
//       <div className="flex align-center justify-center w-100">
//         <nav>
//           <a href="#home" className="nav-item">
//             Home
//           </a>
//           <a href="#courses" className="nav-item">
//             Courses <img src={arrow} />
//           </a>
//           <a href="#about" className="nav-item">
//             About <img src={arrow} />
//           </a>
//           <a href="#investors" className="nav-item nav-green">
//             For Investors
//           </a>
//         </nav>
//         <div className="search-container">
//           <svg
//             className="search-icon"
//             width="32px"
//             height="32px"
//             viewBox="0 0 32px 32px"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             onClick={() => setSearch(!search)}
//           >
//             <path
//               d="M19.7996 19L16.2997 15.5M18.7996 9.5C18.7996 14.1944 14.994 18 10.2996 18C5.60514 18 1.79956 14.1944 1.79956 9.5C1.79956 4.80558 5.60514 1 10.2996 1C14.994 1 18.7996 4.80558 18.7996 9.5Z"
//               stroke="white"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search"
//             className="search-input search-input-nav"
//           />
//           {search && (
//             <input type="text" placeholder="Search" className="search-input" />
//           )}
//         </div>
//       </div>
//       <div className="navbar-actions">
//         <span className="balance">2.94 AED +0.00%</span>
//         <button className="nav-button">Register or Log in</button>
//         <span className="balance">
//           En <img src={arrow} />
//         </span>
//       </div>
//       <div
//         onClick={() => setMenu(!menu)}
//         class={menu ? "hamburger  active" : "hamburger"}
//       >
//         <div class="line"></div>
//         <div class="line"></div>
//         <div class="line"></div>
//       </div>
//       {menu && <Menu />}
//     </header>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link import karein
import arrow from "../images/arrowDown.svg";
import Menu from "./Menu";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <header>
      <div className="flex align-center justify-center w-100">
        <nav>
          <Link to="/" className="nav-item home-active">
            {" "}
            Home
          </Link>
          <Link to="/test2" className="nav-item">
            {" "}
            Test2-Link <img src={arrow} alt="Arrow" />
          </Link>
          <Link to="#about" className="nav-item">
            {" "}
            About <img src={arrow} alt="Arrow" />
          </Link>
          <Link to="#investors" className="nav-item nav-green">
            {" "}
            For Investors
          </Link>
        </nav>
        <div className="search-container">
          <svg
            className="search-icon"
            width="32px"
            height="32px"
            viewBox="0 0 32px 32px"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setSearch(!search)}
          >
            <path
              d="M19.7996 19L16.2997 15.5M18.7996 9.5C18.7996 14.1944 14.994 18 10.2996 18C5.60514 18 1.79956 14.1944 1.79956 9.5C1.79956 4.80558 5.60514 1 10.2996 1C14.994 1 18.7996 4.80558 18.7996 9.5Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="search-input search-input-nav"
          />
          {search && (
            <input type="text" placeholder="Search" className="search-input" />
          )}
        </div>
      </div>
      <div className="navbar-actions">
        <span className="balance">2.94 AED +0.00%</span>
        <button className="nav-button">Register or Log in</button>
        <span className="balance">
          En <img src={arrow} alt="Arrow" />
        </span>
      </div>
      <div
        onClick={() => setMenu(!menu)}
        className={menu ? "hamburger active" : "hamburger"}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {menu && <Menu />}
    </header>
  );
}
