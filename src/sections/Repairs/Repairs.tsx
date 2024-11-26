import classes from "./Repairs.module.scss";
import cleaning from "../../assets/img/1photo.jpg";
import repairing from "../../assets/img/photo2.jpg";
import replacement from "../../assets/img/photo3.webp";
import TAN from "../../assets/img/photo3.png";
import { Link } from "react-router-dom";

export const Repairs = () => {
  const repairsData = [
    {
      id: 1,
      title: "Чистка стиральной машины",
      desc: "Примеры работ по чистке стиральной машины",
      img: cleaning,
    },
    {
      id: 2,
      title: "Ремонт электронного блока управления",
      desc: "Примеры работ по диагностике блоков управления",
      img: repairing,
    },
    {
      id: 3,
      title: "Замена подшипников и крестовины",
      desc: "Примеры работ по замене подшипников",
      img: replacement,
    },
    {
      id: 4,
      title: "Замена ТЭНа",
      desc: "Примеры работ по замене ТЭНа на стиральных машинах",
      img: TAN,
    },
  ];

  return (
    <div className={classes.repairsWrapper}>
      {repairsData.map((item) => (
        <Link
          to={`/repair/${item.id}`}
          key={item.id}
          className={classes.repairCard}
        >
          <div
            className={classes.img}
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          />
          <div className={classes.textWrapper}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
