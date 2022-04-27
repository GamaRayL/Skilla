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
        <div className={css.card}>
          <div className={css.name}>
            Новые звонки <span className={css.number}>20 из 30 шт</span>
          </div>
          <div className={css.bar}></div>
        </div>
        <div className={css.card}>
          <div className={css.name}>
            Качество разговоров <span className={css.number}>40%</span>
          </div>
          <div className={css.bar}></div>
        </div>
        <div className={css.card}>
          <div className={css.name}>
            Конверсия в заказ <span className={css.number}>67%</span>
          </div>
          <div className={css.bar}></div>
        </div>
      </div>
      <div className={css.search}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z"
            fill="#ADBFDF"
          />
        </svg>
      </div>
      <div className={css.entrepreneur}>
        ИП Сидорова Александра Михайловна
        <span className={css.arrow}>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
              fill="#ADBFDF"
            />
          </svg>
        </span>
      </div>
      <div className={css.profile}>
        <div className={css.avatar}>
          <img className={css.image} src="/images/avatar.png" alt="" />
        </div>
        <span className={css.arrow}>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
              fill="#ADBFDF"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
