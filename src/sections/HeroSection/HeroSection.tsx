import classes from "./HeroSection.module.scss";
import { TextField } from "../../ui/TextField/TextField.tsx";
import { Button } from "../../ui/Button/Button.tsx";
import { PhoneInput } from "react-international-phone";
import { FC, useState } from "react";
import "react-international-phone/style.css";
import { TypeAnimation } from "react-type-animation";

interface HeroSectionProps {
  hasText?: boolean;
}

export const HeroSection: FC<HeroSectionProps> = ({ hasText = true }) => {
  const [phone, setPhone] = useState("");

  return (
    <div className={classes.heroWrapper}>
      <div className={classes.heroContent}>
        {hasText && (
          <div className={classes.heroText}>
            <p className={classes.heroTitle}>
              Ремонт стиральных машин в Бобруйске
            </p>
            <p className={classes.heroSubtitle}>
              Обратившись к нам Вы получите:
            </p>
            <TypeAnimation
              sequence={[
                "Качественный ремонт на дому",
                1000,
                "Цены НИЖЕ чем у конкурентов",
                1000,
                "Индивидуальный подход",
                1000,
                "Скидки на первое обращение",
                1000,
              ]}
              speed={50}
              className={classes.typingText}
              repeat={Infinity}
            />
          </div>
        )}
        <div className={classes.heroFormWrapper}>
          <p className={classes.formTitle}>Оставьте заявку на ремонт</p>
          <p className={classes.formSubTitle}>
            И получите бесплатную консультацию по телефону
          </p>
          <form className={classes.contentForm}>
            <TextField placeholder="Ваше имя" />
            <PhoneInput
              value={phone}
              defaultCountry="by"
              onChange={(phone) => setPhone(phone)}
              className={classes.telInput}
              placeholder="+375 (99) 999-99-99"
            />

            <Button animated={true}>
              <p>Отправить заявку</p>
            </Button>
            <p className={classes.policyText}>
              Нажимая на кнопку, вы соглашаетесь с нашей Политикой
              конфиденциальности.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
