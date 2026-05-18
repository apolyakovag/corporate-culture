import { imgUnion4 } from "./figma-assets";
import {
  theoryHeroChevron,
  theoryHeroDecoLg,
  theoryHeroDecoMd,
  theoryHeroDecoSm,
  theoryHeroGlow,
  theoryHeroGlow2,
  theoryIconChevronLeft,
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
  theoryImgProfile,
  theoryImgSearch,
} from "./figma-assets";

type BasicConceptsPageProps = {
  onBack: () => void;
};

type IconSize = 16 | 18 | 22;

type MenuItem = {
  label: string;
  icon: string;
  fitClass: string;
  active?: boolean;
};

const MENU_ITEMS: MenuItem[] = [
  { label: "Основные понятия", icon: theoryIconLightbulb, fitClass: "ui-icon-slot__fit--bulb", active: true },
  { label: "Миссия и ценности", icon: theoryIconRocket, fitClass: "ui-icon-slot__fit--rocket" },
  { label: "Стратегия развития", icon: theoryIconRoute, fitClass: "ui-icon-slot__fit--route" },
  { label: "Корпоративные компетенции", icon: theoryIconUserCog, fitClass: "ui-icon-slot__fit--user-cog" },
  { label: "Стремление к большему", icon: theoryIconTrophy, fitClass: "ui-icon-slot__fit--trophy" },
  { label: "Вера в дело", icon: theoryIconHandHeart, fitClass: "ui-icon-slot__fit--hand-heart" },
  { label: "ЗКА", icon: theoryIconChart, fitClass: "ui-icon-slot__fit--chart" },
  { label: "ЗКО", icon: theoryIconMessages, fitClass: "ui-icon-slot__fit--messages" },
  { label: "Декомпозиция", icon: theoryIconAlign, fitClass: "ui-icon-slot__fit--align" },
  { label: "Лидерство", icon: theoryIconCrown, fitClass: "ui-icon-slot__fit--crown" },
  { label: "Делегирование и грейды", icon: theoryIconGitFork, fitClass: "ui-icon-slot__fit--git-fork" },
] as const;

const INFO_CARDS = [
  {
    title: "АО «ОЭЗ ППТ «Алабуга»",
    text: "– это управляющая компания, являющаяся инфраструктурным партнером полного цикла и обеспечивающая кадровую, социальную, промышленную и строительную инфраструктуры",
  },
  {
    title: "ОЭЗ",
    text: "– это часть территории Российской Федерации, которая определяется Правительством Российской Федерации и на которой действует особый режим осуществления предпринимательской деятельности, а также может применяться таможенная процедура свободной таможенной зоны.",
  },
  {
    title: "Алабуга",
    text: "– это масштабный федеральный проект, направленный на развитие регионов путём прямых российских и иностранных инвестиций в высокотехнологичные отрасли экономики, импортозамещающие производства",
  },
] as const;

function Icon({
  src,
  size,
  fitClass,
  rotate,
}: {
  src: string;
  size: IconSize;
  fitClass: string;
  rotate?: boolean;
}) {
  return (
    <span
      className={`ui-icon-slot ui-icon-slot--${size}${rotate ? " ui-icon-slot--rotate-180" : ""}`}
      aria-hidden="true"
    >
      <span className={`ui-icon-slot__fit ${fitClass}`}>
        <img src={src} alt="" decoding="async" />
      </span>
    </span>
  );
}

export function BasicConceptsPage({ onBack }: BasicConceptsPageProps) {
  return (
    <div className="basic-concepts-page" data-node-id="17018:58108" data-name="КК/Основные понятия">
      <header className="basic-concepts-page__header">
        <div className="basic-concepts-page__header-panel">
          <button type="button" className="basic-concepts-page__back-btn" onClick={onBack} aria-label="Назад">
            <Icon src={imgUnion4} size={22} fitClass="ui-icon-slot__fit--arrow" rotate />
          </button>
        </div>
        <div className="basic-concepts-page__header-panel basic-concepts-page__header-panel--grow">
          <h1 className="basic-concepts-page__header-title">Корпоративная культура</h1>
        </div>
        <div className="basic-concepts-page__header-panel basic-concepts-page__header-panel--search">
          <label className="basic-concepts-page__search">
            <Icon src={theoryImgSearch} size={18} fitClass="ui-icon-slot__fit--search" />
            <span className="basic-concepts-page__search-placeholder">Введите текст</span>
          </label>
        </div>
        <div className="basic-concepts-page__header-panel">
          <div className="basic-concepts-page__avatar">
            <img src={theoryImgProfile} alt="" decoding="async" />
          </div>
        </div>
      </header>

      <div className="basic-concepts-page__body">
        <div className="basic-concepts-page__sidebar-wrap">
          <aside className="basic-concepts-page__sidebar">
            <nav className="basic-concepts-page__nav" aria-label="Разделы теории">
              {MENU_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className={`basic-concepts-page__nav-item${item.active ? " basic-concepts-page__nav-item--active" : ""}`}
                >
                  <Icon src={item.icon} size={16} fitClass={item.fitClass} />
                  <span>{item.label}</span>
                </div>
              ))}
            </nav>
            <button type="button" className="basic-concepts-page__check-btn">
              Проверить себя
            </button>
          </aside>
          <button type="button" className="basic-concepts-page__sidebar-toggle" aria-label="Свернуть меню">
            <span className="basic-concepts-page__sidebar-toggle-btn">
              <Icon
                src={theoryIconChevronLeft}
                size={18}
                fitClass="ui-icon-slot__fit--chevron-left"
              />
            </span>
          </button>
        </div>

        <div className="basic-concepts-page__layout">
          <div className="basic-concepts-page__container">
            <div className="basic-concepts-page__main-block">
              <section className="basic-concepts-page__intro">
                <h2 className="basic-concepts-page__title">Корпоративная культура</h2>
                <p className="basic-concepts-page__subtitle">
                  – это нормы и образцы поведения, которые определяют деятельность всех сотрудников компании и
                  отношения между ними.
                </p>
              </section>

              <div className="basic-concepts-page__hero-visual" aria-hidden="true">
                <div className="basic-concepts-page__hero-scaler">
                  <div className="basic-concepts-page__hero-stage">
                    <div className="basic-concepts-page__hero-layer basic-concepts-page__hero-layer--wide">
                      <div className="basic-concepts-page__hero-layer-art basic-concepts-page__hero-layer-art--wide">
                        <img src={theoryHeroGlow} alt="" decoding="async" />
                      </div>
                    </div>
                    <div className="basic-concepts-page__hero-layer basic-concepts-page__hero-layer--center">
                      <div className="basic-concepts-page__hero-layer-art basic-concepts-page__hero-layer-art--center">
                        <img src={theoryHeroGlow2} alt="" decoding="async" />
                      </div>
                    </div>
                    <div className="basic-concepts-page__hero-layer basic-concepts-page__hero-layer--chevron">
                      <div className="basic-concepts-page__hero-layer-art basic-concepts-page__hero-layer-art--chevron">
                        <img src={theoryHeroChevron} alt="" decoding="async" />
                      </div>
                    </div>
                    <img
                      className="basic-concepts-page__hero-deco basic-concepts-page__hero-deco--lg-left"
                      src={theoryHeroDecoLg}
                      alt=""
                      decoding="async"
                    />
                    <img
                      className="basic-concepts-page__hero-deco basic-concepts-page__hero-deco--lg-right"
                      src={theoryHeroDecoLg}
                      alt=""
                      decoding="async"
                    />
                    <img
                      className="basic-concepts-page__hero-deco basic-concepts-page__hero-deco--sm-left"
                      src={theoryHeroDecoSm}
                      alt=""
                      decoding="async"
                    />
                    <img
                      className="basic-concepts-page__hero-deco basic-concepts-page__hero-deco--sm-right"
                      src={theoryHeroDecoSm}
                      alt=""
                      decoding="async"
                    />
                    <img
                      className="basic-concepts-page__hero-deco basic-concepts-page__hero-deco--md-tl"
                      src={theoryHeroDecoMd}
                      alt=""
                      decoding="async"
                    />
                    <img
                      className="basic-concepts-page__hero-deco basic-concepts-page__hero-deco--md-tr"
                      src={theoryHeroDecoMd}
                      alt=""
                      decoding="async"
                    />
                    <img
                      className="basic-concepts-page__hero-deco basic-concepts-page__hero-deco--md-bl"
                      src={theoryHeroDecoMd}
                      alt=""
                      decoding="async"
                    />
                    <img
                      className="basic-concepts-page__hero-deco basic-concepts-page__hero-deco--md-br"
                      src={theoryHeroDecoMd}
                      alt=""
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              <div className="basic-concepts-page__cards">
                {INFO_CARDS.map((card) => (
                  <article key={card.title} className="basic-concepts-page__info-card">
                    <h3 className="basic-concepts-page__info-card-title">{card.title}</h3>
                    <p className="basic-concepts-page__info-card-text">{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <footer className="basic-concepts-page__pagination">
            <button type="button" className="basic-concepts-page__page-btn" onClick={onBack}>
              ← Назад
            </button>
            <button type="button" className="basic-concepts-page__page-btn basic-concepts-page__page-btn--next">
              Далее →
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
