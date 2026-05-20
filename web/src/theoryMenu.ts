import {
  theoryIconAlign,
  theoryIconChart,
  theoryIconCrown,
  theoryIconGitFork,
  theoryIconHandHeart,
  theoryIconLightbulb,
  theoryIconMessages,
  theoryIconRocket,
  theoryIconRoute,
  theoryIconTrophy,
  theoryIconUserCog,
} from "./figma-assets";

export const THEORY_HASH = {
  concepts: "#/osnovnye-ponyatiya",
  mission: "#/missiya-i-tsennosti",
  strategy: "#/strategiya-razvitiya",
  competencies: "#/korporativnye-kompetencii",
  striving: "#/stremlenie-k-bolshemu",
  faith: "#/vera-v-delo",
  zka: "#/zona-komforta-po-analitike",
  zko: "#/zona-komforta-po-obshcheniyu",
  decomposition: "#/dekompositsiya",
} as const;

export type TheorySectionId = keyof typeof THEORY_HASH;

/** Порядок теоретических разделов для пагинации «Назад» / «Далее» */
export const THEORY_SECTION_ORDER: TheorySectionId[] = [
  "concepts",
  "mission",
  "strategy",
  "competencies",
  "striving",
  "faith",
  "zka",
  "zko",
  "decomposition",
];

export function getTheoryAdjacentSection(
  current: TheorySectionId,
  direction: "prev" | "next",
): TheorySectionId | null {
  const index = THEORY_SECTION_ORDER.indexOf(current);
  if (index === -1) return null;
  if (direction === "prev") {
    return index > 0 ? THEORY_SECTION_ORDER[index - 1] : null;
  }
  return index < THEORY_SECTION_ORDER.length - 1 ? THEORY_SECTION_ORDER[index + 1] : null;
}

/** Нормализует hash: принимает `#/path`, `#path` и `path` */
export function parseTheorySectionFromHash(hash: string): TheorySectionId | null {
  const path = hash.replace(/^#\/?/, "").split("?")[0].replace(/\/$/, "");
  if (path === "osnovnye-ponyatiya") return "concepts";
  if (path === "missiya-i-tsennosti") return "mission";
  if (path === "strategiya-razvitiya") return "strategy";
  if (path === "korporativnye-kompetencii") return "competencies";
  if (path === "stremlenie-k-bolshemu") return "striving";
  if (path === "vera-v-delo") return "faith";
  if (path === "zona-komforta-po-analitike") return "zka";
  if (path === "zona-komforta-po-obshcheniyu") return "zko";
  if (path === "dekompositsiya") return "decomposition";
  return null;
}

export function theoryHashForSection(section: TheorySectionId): string {
  return THEORY_HASH[section];
}

export type TheoryMenuItem = {
  id: TheorySectionId | null;
  label: string;
  icon: string;
  fitClass: string;
};

export const THEORY_MENU_ITEMS: TheoryMenuItem[] = [
  {
    id: "concepts",
    label: "Основные понятия",
    icon: theoryIconLightbulb,
    fitClass: "ui-icon-slot__fit--bulb",
  },
  {
    id: "mission",
    label: "Миссия и ценности",
    icon: theoryIconRocket,
    fitClass: "ui-icon-slot__fit--rocket",
  },
  {
    id: "strategy",
    label: "Стратегия развития",
    icon: theoryIconRoute,
    fitClass: "ui-icon-slot__fit--route",
  },
  {
    id: "competencies",
    label: "Корпоративные компетенции",
    icon: theoryIconUserCog,
    fitClass: "ui-icon-slot__fit--user-cog",
  },
  {
    id: "striving",
    label: "Стремление к большему",
    icon: theoryIconTrophy,
    fitClass: "ui-icon-slot__fit--trophy",
  },
  {
    id: "faith",
    label: "Вера в дело",
    icon: theoryIconHandHeart,
    fitClass: "ui-icon-slot__fit--hand-heart",
  },
  { id: "zka", label: "ЗКА", icon: theoryIconChart, fitClass: "ui-icon-slot__fit--chart" },
  { id: "zko", label: "ЗКО", icon: theoryIconMessages, fitClass: "ui-icon-slot__fit--messages" },
  { id: "decomposition", label: "Декомпозиция", icon: theoryIconAlign, fitClass: "ui-icon-slot__fit--align" },
  { id: null, label: "Лидерство", icon: theoryIconCrown, fitClass: "ui-icon-slot__fit--crown" },
  {
    id: null,
    label: "Делегирование и грейды",
    icon: theoryIconGitFork,
    fitClass: "ui-icon-slot__fit--git-fork",
  },
];
