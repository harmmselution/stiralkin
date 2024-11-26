import classes from "./RepairPage.module.scss";
import cleaning1 from "../../assets/img/cleaningPage/cleaning1.jpg";
import cleaning2 from "../../assets/img/cleaningPage/cleaning2.jpg";
import cleaning3 from "../../assets/img/cleaningPage/cleaning3.jpg";
import cleaning4 from "../../assets/img/cleaningPage/cleaning4.jpg";
import cleaning5 from "../../assets/img/cleaningPage/cleaning5.jpg";
import cleaning6 from "../../assets/img/cleaningPage/cleaning6.jpg";
import eby1 from "../../assets/img/cleaningPage/eby1.jpg";
import eby2 from "../../assets/img/cleaningPage/eby2.jpg";
import eby3 from "../../assets/img/cleaningPage/eby3.png";
import eby4 from "../../assets/img/cleaningPage/eby4.jpg";
import eby5 from "../../assets/img/cleaningPage/eby5.jpg";
import eby6 from "../../assets/img/cleaningPage/eby6.jpg";
import podchi1 from "../../assets/img/cleaningPage/podchi1.jpg";
import podchi2 from "../../assets/img/cleaningPage/podchi2.jpg";
import podchi3 from "../../assets/img/cleaningPage/podchi3.jpg";
import podchi4 from "../../assets/img/cleaningPage/podchi4.jpg";
import podchi5 from "../../assets/img/cleaningPage/podchi5.jpg";
import podchi6 from "../../assets/img/cleaningPage/podchi6.jpg";
import ten1 from "../../assets/img/cleaningPage/ten1.png";
import ten2 from "../../assets/img/cleaningPage/ten2.webp";
import ten3 from "../../assets/img/cleaningPage/ten3.jpg";
import ten4 from "../../assets/img/cleaningPage/ten4.jpg";
import ten5 from "../../assets/img/cleaningPage/ten5.jpg";
import ten6 from "../../assets/img/cleaningPage/ten6.jpg";
import { useParams } from "react-router-dom";
import { HeroSection } from "../../sections/HeroSection/HeroSection.tsx";

export const RepairPage = () => {
  const { id } = useParams();
  const repairPageData = [
    {
      id: "1",
      text: (
        <div className={classes.textWrapper}>
          <h3>Чистка стиральной машины:</h3>
          <p>
            В процессе долгой и неправильной эксплуатации стиральной машины
            нередко бывает, что от неё может исходить очень неприятный запах.
          </p>
          <h3>Причины возникновения запаха:</h3>
          <p>
            1) Эксплуатация стиральной машины только на "быстрых
            стирках"(температура около 30 градусов)
          </p>{" "}
          <p>2) Несвоевременная профилактическая чистка спец. средствами</p>{" "}
          <p>3) Плохой запах воды в системе водоснабжения</p>{" "}
          <p>4) Несвоевременный уход за стиральной машиной</p>
        </div>
      ),
      imgs: [
        {
          id: 1,
          src: cleaning1,
        },
        {
          id: 2,
          src: cleaning2,
        },
        {
          id: 3,
          src: cleaning3,
        },
        {
          id: 4,
          src: cleaning4,
        },
        {
          id: 5,
          src: cleaning5,
        },
        {
          id: 6,
          src: cleaning6,
        },
      ],
    },
    {
      id: "2",
      text: (
        <div className={classes.textWrapper}>
          <h3>Замена ТЭНа (нагревательный элемент) на стиральных машинах:</h3>
          <p>
            Современные стиральные машины оснащены сложным электронным
            компонентом который называется блоком управления. Задача этого узла
            контролировать и управлять всеми исполнительными механизмами
            стиральной машины. В случае неисправности какого-либо узла ЭБУ с
            помощью платы индикации выдаёт ошибку которая соответствует данной
            неисправности.
          </p>
          <h3>Причины выхода из строя электронного блока управления:</h3>
          <p>1) Слишком частые скачки напряжения в сети</p>{" "}
          <p>2) "Старость" некоторых компонентов ЭБУ</p>{" "}
          <p>3) Неисправность какого-либо узла в стиральной машине</p>{" "}
        </div>
      ),
      imgs: [
        {
          id: 1,
          src: eby1,
        },
        {
          id: 2,
          src: eby2,
        },
        {
          id: 3,
          src: eby3,
        },
        {
          id: 4,
          src: eby4,
        },
        {
          id: 5,
          src: eby5,
        },
        {
          id: 6,
          src: eby6,
        },
      ],
    },
    {
      id: "3",
      text: (
        <div className={classes.textWrapper}>
          <h3>Замена подшипников на стиральной машине:</h3>
          <p>
            Во время длительной эксплуатации стиральной машины возникают сильные
            нагрузки на опорный узел (крестовину) и на сами подшипники в
            результате эти элементы выходят из строя.
          </p>
          <h3>Признаками выхода из строя подшипников являются:</h3>
          <p>
            1) Сильный шум или гул при работе стиральной машины (особенно во
            время отжима)
          </p>{" "}
          <p>2) Повышенная вибрация стиральной машины</p>{" "}
          <p>
            3) После стирки на белье можно увидеть чёрные пятна (похожие на
            смазку)
          </p>{" "}
        </div>
      ),
      imgs: [
        {
          id: 1,
          src: podchi1,
        },
        {
          id: 2,
          src: podchi2,
        },
        {
          id: 3,
          src: podchi3,
        },
        {
          id: 4,
          src: podchi4,
        },
        {
          id: 5,
          src: podchi5,
        },
        {
          id: 6,
          src: podchi6,
        },
      ],
    },
    {
      id: "4",
      text: (
        <div className={classes.textWrapper}>
          <h3>Замена подшипников на стиральной машине:</h3>
          <p>
            Чаще всего причинами выхода из строя ТЭНов является плохое состояние
            водоснабжения и несвоевременная чистка стиральной машины спец.
            средствами
          </p>
          <h3>
            Основными неисправностями по которым можно сделать вывод о том что
            неисправен ТЭН являются:
          </h3>
          <p>1) Стиральная машина бьётся током</p>{" "}
          <p>
            2) Стиральная машина долго (или бесконечно долго) стирает и зависает
            на последней минуте стирки
          </p>{" "}
          <p>
            3) Стиральная машина НЕ ГРЕЕТ воду после продолжительного времени
            стирки
          </p>{" "}
          <p>4) При включении стиральной машины в розетку выбивает автомат </p>{" "}
        </div>
      ),
      imgs: [
        {
          id: 1,
          src: ten1,
        },
        {
          id: 2,
          src: ten2,
        },
        {
          id: 3,
          src: ten3,
        },
        {
          id: 4,
          src: ten4,
        },
        {
          id: 5,
          src: ten5,
        },
        {
          id: 6,
          src: ten6,
        },
      ],
    },
  ];
  const currentSection = repairPageData.find((item) => item.id === id);

  return (
    <>
      <HeroSection hasText={false} />
      <section className={classes.repairSectionWrapper}>
        {currentSection?.text}
        <div className={classes.imgsContainer}>
          {currentSection.imgs.map((img) => (
            <img key={img.id} src={img.src} alt="repair" />
          ))}
        </div>
      </section>
    </>
  );
};
