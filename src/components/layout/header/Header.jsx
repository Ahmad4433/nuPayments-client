import React, { useState } from "react";
import style from "./header.module.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
const Header = () => {

    const [isOpen,setIsOpen] = useState(false)

    const menuOpener = () => {
        setIsOpen(true); // Setting the state variable isOpen to true
        document.body.style.overflow = 'hidden'; // Setting the CSS style of the body to prevent scrolling
     }
     
    const closeHandler = ()=>{
        setIsOpen(false)
        document.body.style.overflow='auto'
    }

  return (
    <div className={style.main}>
      <div className={style.header}>
        <div className={style.logoC}>
          <img src={logo} alt="logo" className={style.logo} />
          <span className={style.title}>nuPayments</span>
        </div>
      {!isOpen &&   <FiMenu onClick={menuOpener} className={style.menuIcon} />}
      {isOpen &&   <IoClose onClick={closeHandler} className={style.menuIcon} />  }  
        <div className={style.items}>
          <Link>nu</Link>
          <Link>Whitepaper</Link>
          <Link>NRU</Link>
          <Link>Pricing</Link>
          <Link>Contact Us</Link>
        </div>
      </div>
      <div className={isOpen ? style.open:style.mobileM} >
        <div className={style.links} >
        <Link>nu</Link>
          <Link>Whitepaper</Link>
          <Link>NRU</Link>
          <Link>Pricing</Link>
          <Link>Contact Us</Link>

        </div>
      </div>
    </div>
  );
};

export default Header;
