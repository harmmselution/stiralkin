import classes from "./Prices.module.scss";
import washingMa from "../../assets/img/washing-ma.png";
import { Button } from "../../ui/Button/Button.tsx";

export const Prices = () => {
  return (
    <div className={classes.prices}>
      <div className={classes.sectionText}>
        <h2>Цены на наши услуги:</h2>
        <p>
          Ниже представлены 3 тарифа по которому Вы можете сориентироваться по
          цене на наши услуги
        </p>
      </div>
      <div className={classes.methodsWrapper}>
        <div className={classes.method}>
          <div className={classes.methodHeader}>
            <img src={washingMa} alt="washing" />
            <p>"Экспресс ремонт"</p>
          </div>
          <div className={classes.methodDesc}>
            <p className={classes.descItem}>
              Диагностика стиральной машины по основной неисправности
            </p>{" "}
            <p className={classes.descItem}>
              Быстрое устранение неисправности по которой был вызов (замена
              ТЭНа, чистка засора, замена амортизаторов и т.д.)
            </p>{" "}
            <p className={classes.descItem}>Гарантия на ремонт 3 месяца</p>{" "}
            <strong className={classes.descDefinition}>
              Для кого подходит:
            </strong>{" "}
            <p className={classes.descItem}>
              Этот тариф идеален для тех, у кого нет серьезных проблем с
              техникой, но требуется быстрая и недорогая помощь для устранения
              мелких неисправностей.
            </p>
          </div>
          <p className={classes.price}>60-100 BYN</p>
          <Button animated={false} className={classes.btn}>
            <p className={classes.btnText}>Заказать</p>
          </Button>
        </div>
        <div className={classes.divider} />

        <div className={classes.method}>
          <div className={classes.methodHeader}>
            <img src={washingMa} alt="washing" />
            <p>"Ремонт под ключ"</p>
          </div>
          <div className={classes.methodDesc}>
            <p className={classes.descItem}>
              Полная диагностика{" "}
              <strong className={classes.descDefinition}>всех</strong> систем
              стиральной машины
            </p>{" "}
            <p className={classes.descItem}>
              Ремонт средней сложности (сборка/разборка СМА в случаи где это
              необходимо для замены некоторых узлов, замена насосов вместе с
              чисткой сливной системы, замена подшипников стиральной машины и
              т.д.)
            </p>{" "}
            <p className={classes.descItem}>
              При ремонте используются только качественные и оригинальные
              запчасти (рекомендованные заводом изготовителем)
            </p>{" "}
            <p className={classes.descItem}>
              При замене от 2-х и более запчастей даём скидку
              <strong className={classes.descDefinition}> до 50%</strong> на
              комплексное обслуживание (зависит от марки стиральной машины и от
              количества заменяемых запчастей)
            </p>{" "}
            <p className={classes.descItem}>
              Рекомендации по уходу за Вашей стиральной машиной после ремонта
            </p>{" "}
            <p className={classes.descItem}>
              Рекомендации по правильной эксплуатации Вашей стиральной машины
            </p>{" "}
            <p className={classes.descItem}>Гарантия на ремонт 6 месяцев</p>
            <strong className={classes.descDefinition}>
              Для кого подходит:
            </strong>
            <p className={classes.descItem}>
              Отличный выбор для тех, кто хочет надежное обслуживание с
              использованием проверенных запчастей и желает получить уверенность
              в стабильной работе своей техники на длительный срок.
            </p>
          </div>
          <p className={classes.price}>120-220 BYN</p>
          <Button animated={false} className={classes.btn}>
            <p className={classes.btnText}>Заказать</p>
          </Button>
        </div>
        <div className={classes.divider} />
        <div className={classes.method}>
          <div className={classes.methodHeader}>
            <img src={washingMa} alt="washing" />
            <p>"Pro-Комфорт"</p>
          </div>
          <div className={classes.methodDesc}>
            <p className={classes.descItem}>
              Тщательная комплексная диагностика всех компонентов стиральной
              машины.
            </p>{" "}
            <p className={classes.descItem}>
              Ремонт любой сложности (замена двигателя, электронных модулей,
              бака в сборе с барабаном и других ключевых элементов СМА)
            </p>{" "}
            <p className={classes.descItem}>
              Восстановление либо замена корпуса стиральной машины с работами по
              покраске
            </p>{" "}
            <p className={classes.descItem}>
              При необходимости сами приедем и заберём/отвезём Вашу стиральную
              машину к нам на сервис с целью улучшения качества сервиса и Вашего
              комфорта
            </p>{" "}
            <p className={classes.descItem}>
              Гарантия на все работы и запчасти — 1 год.{" "}
            </p>{" "}
            <strong className={classes.descDefinition}>
              Для кого подходит:
            </strong>
            <p className={classes.descItem}>
              Тариф создан для тех, кто ценит высокое качество, надежность и
              комфорт. Подходит для решения сложных проблем при восстановлении
              техники
            </p>
          </div>
          <p className={classes.price}>350-450 BYN</p>
          <Button animated={false} className={classes.btn}>
            <p className={classes.btnText}>Заказать</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
