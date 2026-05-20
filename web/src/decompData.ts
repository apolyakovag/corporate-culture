export type DecompMetricTone = "dash" | "success" | "orange" | "danger";

export type DecompMetric = {
  value: string;
  tone: DecompMetricTone;
};

export type DecompLevelRow = {
  num: string;
  description: string;
  withoutDecomp: {
    result: DecompMetric;
    damage: DecompMetric;
  };
  measures: {
    modifier: string;
    frequency: string;
  };
  withDecomp: {
    result: DecompMetric;
    damage: DecompMetric;
  };
};

export const DECOMP_PAGE_COPY = {
  heroTitle: "Декомпозиция",
  heroSubtitle: "— операция мышления, состоящая в разделении целого на части",
  introPrimary:
    "Также декомпозицией называется общий приём, применяемый при решении проблем, состоящий в разделении проблемы на множество частных проблем, а также задач, не превосходящих суммарно по сложности исходную проблему, с помощью объединения решений которых, можно сформировать решение исходной проблемы в целом",
  introSecondary:
    "Мы уверены, что каждый наш сотрудник обладает лидерским потенциалом, вне зависимости от того, хочет он развиваться как профессионал (создавая твердый фундамент для работы компании) или как лидер (готовый к новым масштабным задачам в рамках страны)",
  smartFooter: "конкретная, измеримая, достижимая, значимая, ограниченная во времени цель (КИДЗО)",
  forwardFooter:
    "Уровень, при котором не нужны вводные, организованное, не требуемое дополнительных разъяснений достижение целей",
  tasksTitle: "Комплекс задач стоящих перед компанией",
  levelsColumnTitle: "Уровни декомпозиции",
  goalsIntro:
    "В карту целей сотрудников вносятся цели, которые соответствуют двум группам задач и связаны с двумя видами премирования",
} as const;

export const DECOMP_SMART_ROWS = [
  { letter: "S", en: "specific", ru: "конкретная" },
  { letter: "M", en: "measurable", ru: "измеримая" },
  { letter: "A", en: "achievable", ru: "достижимая" },
  { letter: "R", en: "measurable", ru: "значимая" },
  { letter: "T", en: "time bound", ru: "ограниченная во времени" },
] as const;

export const DECOMP_LEVEL_ROWS: DecompLevelRow[] = [
  {
    num: "10",
    description: "Значительно превосходит ожидания, “предвосхищает”",
    withoutDecomp: {
      result: { value: "150%", tone: "success" },
      damage: { value: "-", tone: "dash" },
    },
    measures: { modifier: "-", frequency: "-" },
    withDecomp: {
      result: { value: "-", tone: "dash" },
      damage: { value: "-", tone: "dash" },
    },
  },
  {
    num: "09",
    description: "Превосходит ожидания",
    withoutDecomp: {
      result: { value: "120%", tone: "success" },
      damage: { value: "-", tone: "dash" },
    },
    measures: { modifier: "-", frequency: "-" },
    withDecomp: {
      result: { value: "-", tone: "dash" },
      damage: { value: "-", tone: "dash" },
    },
  },
  {
    num: "08",
    description: "Полностью соответвует ожиданиям",
    withoutDecomp: {
      result: { value: "99%", tone: "success" },
      damage: { value: "1%", tone: "success" },
    },
    measures: { modifier: "Forward", frequency: "По результату" },
    withDecomp: {
      result: { value: "99%", tone: "success" },
      damage: { value: "1%", tone: "success" },
    },
  },
  {
    num: "07",
    description: "В целом сответвует ожиданиям",
    withoutDecomp: {
      result: { value: "87%", tone: "success" },
      damage: { value: "8%", tone: "success" },
    },
    measures: { modifier: "Три ключевых вводных", frequency: "Ежемесячно" },
    withDecomp: {
      result: { value: "97%", tone: "success" },
      damage: { value: "2%", tone: "success" },
    },
  },
  {
    num: "06",
    description: "Понимает задачу и нюансы; достигает результата пр подробной инструкции",
    withoutDecomp: {
      result: { value: "70%", tone: "success" },
      damage: { value: "15%", tone: "success" },
    },
    measures: { modifier: "Девять важных вводных", frequency: "Еженедельно" },
    withDecomp: {
      result: { value: "95%", tone: "success" },
      damage: { value: "3%", tone: "success" },
    },
  },
  {
    num: "05",
    description: "С декомпозицией достигает результат и не наносит урона; требуется пошаговая инструкция",
    withoutDecomp: {
      result: { value: "50%", tone: "orange" },
      damage: { value: "40%", tone: "orange" },
    },
    measures: { modifier: "Пошагово по SMART’у", frequency: "Ежедневно" },
    withDecomp: {
      result: { value: "90%", tone: "success" },
      damage: { value: "5%", tone: "success" },
    },
  },
  {
    num: "04",
    description: "Попадает в хитрые ловушки, даже с объяснениями ",
    withoutDecomp: {
      result: { value: "35%", tone: "danger" },
      damage: { value: "50%", tone: "danger" },
    },
    measures: { modifier: "Пошагово по SMART’у", frequency: "Ежедневно" },
    withDecomp: {
      result: { value: "65%", tone: "orange" },
      damage: { value: "25%", tone: "success" },
    },
  },
  {
    num: "03",
    description: "Попадает в типовые ловушки, даже с объяснениями",
    withoutDecomp: {
      result: { value: "15%", tone: "danger" },
      damage: { value: "65%", tone: "danger" },
    },
    measures: { modifier: "Пошагово по SMART’у", frequency: "Ежедневно" },
    withDecomp: {
      result: { value: "45%", tone: "orange" },
      damage: { value: "35%", tone: "orange" },
    },
  },
  {
    num: "02",
    description: "Сомневается, но попадает в унизительные ловушки",
    withoutDecomp: {
      result: { value: "10%", tone: "danger" },
      damage: { value: "80%", tone: "danger" },
    },
    measures: { modifier: "Пошагово по SMART’у", frequency: "Ежедневно" },
    withDecomp: {
      result: { value: "15%", tone: "danger" },
      damage: { value: "60%", tone: "danger" },
    },
  },
  {
    num: "01",
    description: "Попадает в унизительные ловушки без сомнений",
    withoutDecomp: {
      result: { value: "5%", tone: "danger" },
      damage: { value: "90%", tone: "danger" },
    },
    measures: { modifier: "Пошагово по SMART’у", frequency: "Ежедневно" },
    withDecomp: {
      result: { value: "10%", tone: "danger" },
      damage: { value: "80%", tone: "danger" },
    },
  },
];

export type DecompRichTextPart = {
  text: string;
  highlight?: boolean;
};

export type DecompGoalBlock = {
  id: string;
  title: string;
  description: DecompRichTextPart[];
  steps: string[];
  notes: string[];
};

export const DECOMP_GOAL_BLOCKS: DecompGoalBlock[] = [
  {
    id: "mbo",
    title: "МВО",
    description: [
      { text: "Задачи " },
      { text: "мирового", highlight: true },
      { text: " уровня, выполняемые сотрудником " },
      { text: "самостоятельно", highlight: true },
      { text: " на основании вводных данных от руководителя" },
    ],
    steps: [
      "Составление карты целей",
      "Утверждение карты целей руководителем",
      "Отчет о факте выполнения задач",
    ],
    notes: [
      "Соответствие цели “МВО” мировому уровню определяется руководителем",
      "Данный вид целей вносится сотрудниками в систему 1C:KPI самостоятельно по согласованию с руководителем и в соответсвии с системой SMART",
    ],
  },
  {
    id: "di",
    title: "ДИ",
    description: [
      { text: "Данный вид целей включает в себя " },
      { text: "регулярные и нерегулярные ", highlight: true },
      { text: "задачи, в том числе " },
      { text: "процессные и поступающие от руководителя", highlight: true },
      {
        text: " в течение месяца. «ДИ» включают базовые задачи, но не ограничиваются исключительно должностными инструкциями сотрудника. ",
      },
    ],
    steps: [
      "Проверка наличия установленных ДИ в сиситемем 1C:KPI",
      "Фиксация поступающих задач в системе 1C:KPI в поле “Критерии выполнения”",
      "Отчет о факте выполнения задач",
      "Учесть при закрытии, что снятие проверки осуществляется единоразово",
    ],
    notes: [
      "Устанавливаются сотрудниками АГД заведомо закрытыми в систему 1С:КРІ. Формулировки и вес данных целей не подлежат изменению",
      "При поступающих в рамках «ДИ» задачах от руководителя рекомендуется фиксировать поручения в соответствующем поле «Критерий выполнения» в системе 1С:КРІ. Снятие проверки выполнения данной группы задач осуществляется руководителем единоразово, без возможности повторного прожатия",
    ],
  },
];
