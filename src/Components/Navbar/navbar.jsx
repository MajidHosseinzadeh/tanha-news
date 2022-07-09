import React from "react";
import { useState } from "react";
import './navbar.css';


function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [togglerIcon, setTogglerIcon] = useState("nav__toggler");

    const navToggle = () => {
        active === "nav__menu"
            ? setActive("nav__menu nav__active")
            : setActive("nav__menu");
        togglerIcon === ("nav__toggler")
            ? setTogglerIcon("nav__toggler toggle")
            : setTogglerIcon("nav__toggler");
    }
    


    return (
        <nav className='nav'>
            <button className="nav__brand">خرید اشتراک</button>
            <ul className={active}>
                <li className="nav__item"><a href="#" className="nav__link">صفحه اصلی</a></li>
                <li className="nav__item"><a href="#" className="nav__link">سیاست</a></li>
                <li className="nav__item"><a href="#" className="nav__link">اقتصاد</a></li>
                <li className="nav__item"><a href="#" className="nav__link">بازار های مالی</a></li>
                <li className="nav__item"><a href="#" className="nav__link">فرهنگ و هنر</a></li>
                <li className="nav__item"><a href="#" className="nav__link">تکنولوژی</a></li>
                <li className="nav__item"><a href="#" className="nav__link">ویدیو ها</a></li>
                <li className="nav__item"><a href="#" className="nav__link">وبلاگ</a></li>
            </ul>
            <div onClick={navToggle} className={togglerIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;