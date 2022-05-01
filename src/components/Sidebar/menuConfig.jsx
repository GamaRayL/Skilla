import {
  AdministratorsIcon,
  CallsIcon,
  DocumentsIcon,
  KnowledgeIcon,
  MessagesIcon,
  OrdersIcon,
  PartnersIcon,
  ResultsIcon,
  SettingsIcon,
  ReportsIcon,
} from "../Svg/IconPack";
import css from "./styles.module.css";

const array = [
  { id: 1, title: "Итоги", svg: <ResultsIcon /> },
  { id: 2, title: "Заказы", svg: <OrdersIcon /> },
  { id: 3, title: "Сообщения", svg: <MessagesIcon /> },
  { id: 4, title: "Звонки", svg: <CallsIcon /> },
  { id: 5, title: "Контрагенты", svg: <PartnersIcon /> },
  { id: 6, title: "Документы", svg: <DocumentsIcon /> },
  { id: 7, title: "Исполнители", svg: <AdministratorsIcon /> },
  { id: 8, title: "Отчеты", svg: <ReportsIcon /> },
  { id: 9, title: "База знаний", svg: <KnowledgeIcon /> },
  { id: 10, title: "Настройка", svg: <SettingsIcon /> },
];

export const menuConfig = array.map((item) => (
  <li className={css.item} key={item.id}>
    <span className={css.icon}>{item.svg}</span>
    <span className={css.typography}>{item.title}</span>
  </li>
));
