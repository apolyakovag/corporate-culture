import type { CSSProperties, ReactNode } from "react";
import {
  theoryIconBack,
  theoryIconChevronLeft,
  theoryImgProfile,
  theoryImgSearch,
} from "./figma-assets";
import {
  getTheoryAdjacentSection,
  THEORY_MENU_ITEMS,
  type TheorySectionId,
} from "./theoryMenu";

type IconSize = 16 | 18 | 22;

function Icon({
  src,
  size,
  fitClass,
  rotate,
  tinted = false,
}: {
  src: string;
  size: IconSize;
  fitClass: string;
  rotate?: boolean;
  /** Иконка наследует color родителя (lineList: default #121212, selected #3949ab) */
  tinted?: boolean;
}) {
  return (
    <span
      className={`ui-icon-slot ui-icon-slot--${size}${rotate ? " ui-icon-slot--rotate-180" : ""}${
        tinted ? " ui-icon-slot--tinted" : ""
      }`}
      style={tinted ? ({ ["--icon-mask" as string]: `url("${src}")` } as CSSProperties) : undefined}
      aria-hidden="true"
    >
      <span className={`ui-icon-slot__fit ${fitClass}`}>
        {!tinted && <img src={src} alt="" decoding="async" />}
      </span>
    </span>
  );
}

export type TheoryPageLayoutProps = {
  activeSection: TheorySectionId;
  dataNodeId: string;
  dataName: string;
  onBack: () => void;
  onNavigate: (section: TheorySectionId) => void;
  onPrev?: () => void;
  onNext?: () => void;
  scrollable?: boolean;
  children: ReactNode;
};

export function TheoryPageLayout({
  activeSection,
  dataNodeId,
  dataName,
  onBack,
  onNavigate,
  onPrev,
  onNext,
  scrollable = false,
  children,
}: TheoryPageLayoutProps) {
  const prevSection = getTheoryAdjacentSection(activeSection, "prev");
  const nextSection = getTheoryAdjacentSection(activeSection, "next");

  const handlePrev = onPrev ?? (prevSection ? () => onNavigate(prevSection) : onBack);
  const handleNext =
    onNext ?? (nextSection ? () => onNavigate(nextSection) : undefined);

  return (
    <div className="basic-concepts-page" data-node-id={dataNodeId} data-name={dataName}>
      <header className="basic-concepts-page__header">
        <div className="basic-concepts-page__header-panel">
          <button type="button" className="basic-concepts-page__back-btn" onClick={onBack} aria-label="Назад">
            <Icon src={theoryIconBack} size={22} fitClass="ui-icon-slot__fit--arrow" rotate tinted />
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
              {THEORY_MENU_ITEMS.map((item) => {
                const isActive = item.id === activeSection;
                const className = `basic-concepts-page__nav-item${
                  isActive ? " basic-concepts-page__nav-item--active" : ""
                }${!item.id ? " basic-concepts-page__nav-item--disabled" : ""}`;

                if (item.id) {
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className={className}
                      onClick={() => onNavigate(item.id!)}
                    >
                      <Icon src={item.icon} size={16} fitClass={item.fitClass} tinted />
                      <span>{item.label}</span>
                    </button>
                  );
                }

                return (
                  <div key={item.label} className={className}>
                    <Icon src={item.icon} size={16} fitClass={item.fitClass} tinted />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </nav>
            <button type="button" className="basic-concepts-page__check-btn">
              Проверить себя
            </button>
          </aside>
          <button type="button" className="basic-concepts-page__sidebar-toggle" aria-label="Свернуть меню">
            <span className="basic-concepts-page__sidebar-toggle-btn">
              <Icon src={theoryIconChevronLeft} size={18} fitClass="ui-icon-slot__fit--chevron-left" tinted />
            </span>
          </button>
        </div>

        <div className="basic-concepts-page__layout">
          <div
            className={`basic-concepts-page__container${
              scrollable ? " basic-concepts-page__container--scroll" : ""
            }`}
          >
            <div
              className={`basic-concepts-page__main-block${
                scrollable ? " basic-concepts-page__main-block--content" : ""
              }`}
            >
              {children}
            </div>
          </div>

          <footer className="basic-concepts-page__pagination">
            <button type="button" className="basic-concepts-page__page-btn" onClick={handlePrev}>
              ← Назад
            </button>
            <button
              type="button"
              className="basic-concepts-page__page-btn basic-concepts-page__page-btn--next"
              onClick={handleNext}
              disabled={!handleNext}
            >
              Далее →
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
