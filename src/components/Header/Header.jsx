import css from "./styles.module.css";

export const Header = () => {
  const lang = navigator.language;
  const date = new Date();
  const dayName = date.toLocaleString(lang, { weekday: "long" });
  const dayNumber = date.getDate();
  const monthName = date.toLocaleString(lang, { month: "short" });

  return (
    <div className={css.header}>
      <div className={css.date}>
        {dayName}, {dayNumber} {monthName}
      </div>
      <div className={css.callAnalytics}>
        <div className={css.cardAnalytics}>
          <div className={css.cardName}>Новые звонки 20 из 30 шт</div>
          <div className={css.barActive}></div>
          <div className={css.barInactive}></div>
        </div>
        <div className={css.cardAnalytics}>
          <div className={css.cardName}>Качество разговоров 40%</div>
        </div>
        <div className={css.cardAnalytics}>
          <div className={css.cardName}>Конверсия в заказ 67%</div>
        </div>
      </div>
      <div className={css.search}></div>
      <div className={css.entrepreneur}></div>
      <div className={css.profile}></div>
    </div>
  );
};
