import { Advantages } from "../sections/Advantages/Advantages.tsx";
import { WorkSteps } from "../sections/WorkSteps/WorkSteps.tsx";
import { Repairs } from "../sections/Repairs/Repairs.tsx";
import { Prices } from "../sections/Prices/Prices.tsx";

export const sectionsData = [
  { id: "about us", sectionJSX: Advantages },
  { id: "work steps", sectionJSX: WorkSteps },
  { id: "repairs", sectionJSX: Repairs },
  { id: "prices", sectionJSX: Prices },
];

export const menus = [
  { display: "О нас", code: "about us" },
  { display: "Этапы", code: "work steps" },
  { display: "Наши ремонты", code: "repairs" },
  { display: "Цены", code: "prices" },
  { display: "Контакты", code: "contacts" },
];
