import classes from "./Footer.module.scss";
import logo from "../../assets/img/logo/logo.png";
import { menus } from "../../data";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="logo" width="160" height="160" />
        </div>
        <div className={classes.navigation}>
          <h4>Навигация</h4>
          {menus.map((menu) => (
            <a href={`#${menu.code}`} key={menu.code}>
              {menu.display}
            </a>
          ))}
        </div>
        <div className={classes.navigation}>
          <h4>Контакты</h4>
          <a href="tel:+375293589131">A1 +375(29)358-91-31</a>
          <h5>Минск, ул. Лещинского 8к4</h5>
          <h5>i-stiralkin@yandex.by</h5>
        </div>
        <div className={classes.navigation}>
          <h5>ИП Кулевец Вячеслав Васильевич</h5>
          <h5>УНП 193483441</h5>
          <h5>*Содержимое сайта не является публичной офертой</h5>
        </div>
      </div>
    </footer>
  );
};
