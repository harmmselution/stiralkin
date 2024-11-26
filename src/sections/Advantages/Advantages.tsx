import classes from "./Advantages.module.scss";
import face from "../../assets/img/free-icon-skill-deve.png";
import speed from "../../assets/img/free-icon-repair-tim.png";
import price from "../../assets/img/wallet.png";

export const Advantages = () => {
  return (
    <div className={classes.advantagesWrapper}>
      <div className={classes.advantages}>
        <p className={classes.title}>Преимущества:</p>
        <p className={classes.subTitle}>
          Почему нужно обратиться именно к нам?
        </p>
        <div className={classes.cardsWrapper}>
          <div className={classes.card}>
            <img src={face} alt="face" className={classes.cardImg} />
            <p className={classes.cardTitle}>Квалификация</p>
            <p className={classes.cardSubTitle}>
              У наших мастеров более 8 лет опыта работы
            </p>
          </div>
          <div className={classes.cardDivider}></div>
          <div className={classes.card}>
            <img src={speed} alt="speed" className={classes.cardImg} />
            <p className={classes.cardTitle}>Скорость</p>
            <p className={classes.cardSubTitle}>
              Ремонт типичных неисправностей осуществляется в день обращения
            </p>
          </div>
          <div className={classes.cardDivider}></div>

          <div className={classes.card}>
            <img src={price} alt="price" className={classes.cardImg} />
            <p className={classes.cardTitle}>Цены</p>
            <p className={classes.cardSubTitle}>
              Только у нас самые доступные цены на ремонт
            </p>
          </div>
        </div>
      </div>
      <div className={classes.divider}>
        <div className={classes.opacidDivider}></div>
        <div className={classes.secondDivider}></div>
        <div className={classes.opacidDividerRight}></div>
      </div>
    </div>
  );
};
