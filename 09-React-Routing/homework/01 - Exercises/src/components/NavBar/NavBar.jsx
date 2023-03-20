import React from "react";
import logo from "../../assets/logo.png";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";


export default function NavBar() {
  
  // const NavLinkMe = ({to,children,...props}) => {
  //   return (
  //     <NavLink {...props} 
  //     to={to}
  //     className=className={({isActive})=>(isActive)?
  //      styleNav.active : styleNav.disable}

  //     >
  //       {children}
  //     </NavLink>
  //   );
  // }
  
  
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
        <NavLink to={"/"}>
          <img src={logoHenry} alt="logo-henry" />
          <img src={logo} alt="logo" />
        </NavLink>
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <NavLink to={"/shipping"} className={({isActive})=>(isActive)? styleNav.active : styleNav.disable}>
          <li>
            <span>Navieras</span>
          </li>
          <li>
            <span>Promociones</span>
          </li>
          </NavLink>
       
          
        </div>
      </ul>
    </div>
  );
}
