import classes from "./Header.module.scss";
import { FC, useEffect, useRef, useState } from "react";
import logo from "../../assets/img/logo/logo.png";
import { menus } from "../../data";
import inst from "../../assets/img/svg/inst.svg";
import telegram from "../../assets/img/svg/telegram.svg";
import phone from "../../assets/img/svg/phone.svg";
import viber from "../../assets/img/svg/viber.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  visibleSection: string;
}

export const Header: FC<HeaderProps> = ({ visibleSection }) => {
  const [isShow, setIsShow] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      ref={headerRef}
      className={`${classes.header} ${isShow && classes.showHeader}`}
    >
      <Link to="/" className={classes.logoContainer}>
        <img src={logo} alt="logo" className={classes.logo} />
      </Link>
      <div className={classes.navigation}>
        <div className={classes.menu}>
          {menus.map((menu) => (
            <a
              href={`#${menu.code}`}
              key={menu.code}
              className={`${classes.link} ${
                visibleSection === menu.code && classes.active
              }`}
            >
              {menu.display}
            </a>
          ))}
        </div>
        <div className={classes.contactsWrapper}>
          <p className={classes.phone}>A1 +375(29)365-26-53</p>
          <div className={classes.contacts}>
            <img src={inst} alt="inst" />
            <img src={telegram} alt="telegram" />
            <img src={viber} alt="viber" />
            <img src={phone} alt="phone" />
          </div>
        </div>
      </div>
      <button
        className={`${classes.burgerBtn} ${isOpen ? classes.burgerOpened : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};
