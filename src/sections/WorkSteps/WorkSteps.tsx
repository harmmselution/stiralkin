import classes from "./WorkSteps.module.scss";

export const WorkSteps = () => {
  return (
    <div className={classes.workSteps}>
      <p className={classes.title}>Этапы работы</p>
      <div className={classes.stepBlockWrapper}>
        <div className={classes.stepBlock}>
          <div className={classes.lineContainer}>
            <div className={classes.circle}>
              <p>1</p>
            </div>
            <div className={classes.line}></div>
          </div>
          <div className={classes.textContent}>
            <div className={classes.stepTitle}>Заявка</div>
            <div className={classes.stepDesc}>
              Вы оставляете заявку на сайте или звоните по телефону. Далее наш
              специалист в течении 5 минут связывается с Вами, подбирает для вас
              специалиста и назначает удобное для Вас время визита мастера.
            </div>
          </div>
        </div>
        <div className={classes.stepBlock}>
          <div className={classes.lineContainer}>
            <div className={classes.circle}>
              <p>2</p>
            </div>
            <div className={classes.line}></div>
          </div>
          <div className={classes.textContent}>
            <div className={classes.stepTitle}>Обработка заказа</div>
            <div className={classes.stepDesc}>
              В течении 5 минут с Вами свяжется наш диспетчер. А после
              формирования заявки с Вами связывается наш мастер по ремонту для
              уточнения некоторых данных по Вашей стиральной машине.
            </div>
          </div>
        </div>
        <div className={classes.stepBlock}>
          <div className={classes.lineContainer}>
            <div className={classes.circle}>
              <p>3</p>
            </div>
            <div className={classes.line}></div>
          </div>
          <div className={classes.textContent}>
            <div className={classes.stepTitle}>Диагностика</div>
            <div className={classes.stepDesc}>
              В назначенное время к Вам приезжает наш специалист, делает полную
              диагностику стиральной машины и говорит свое заключение по
              неисправности.
            </div>
          </div>
        </div>
        <div className={classes.stepBlock}>
          <div className={classes.lineContainer}>
            <div className={classes.circle}>
              <p>4</p>
            </div>
          </div>
          <div className={classes.textContent}>
            <div className={classes.stepTitle}>Ремонт</div>
            <div className={classes.stepDesc}>
              После согласования с Вами сроков и стоимости работ мастер
              приступает непосредственно к ремонту Вашей стиральной машины. По
              окончанию ремонта дает гарантию на ремонт.
            </div>
          </div>
        </div>
        <div className={classes.text}>
          Примеры, часто встречающихся, наших ремонтов смотрите ниже:
        </div>
      </div>
    </div>
  );
};
