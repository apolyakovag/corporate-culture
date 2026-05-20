import {
  competenciesDna,
  competenciesHeroGlow1,
  competenciesHeroGlow2,
  competenciesScaleLineH,
  competenciesScaleLineV,
} from "./figma-assets";
import { COMPETENCIES_LEFT, COMPETENCIES_RIGHT, type CompetencyCard } from "./competenciesData";
import { TheoryPageLayout } from "./TheoryPageLayout";
import type { TheorySectionId } from "./theoryMenu";

type CompetenciesPageProps = {
  onBack: () => void;
  onNavigate: (section: TheorySectionId) => void;
  onPrev?: () => void;
  onNext?: () => void;
};

function CompetencyCardItem({ title, text, variant }: CompetencyCard) {
  return (
    <article className={`theory-competency-card theory-competency-card--${variant}`}>
      <h3 className="theory-competency-card__title">{title}</h3>
      <p className="theory-competency-card__text">{text}</p>
    </article>
  );
}

export function CompetenciesPage({ onBack, onNavigate, onPrev, onNext }: CompetenciesPageProps) {
  return (
    <TheoryPageLayout
      activeSection="competencies"
      dataNodeId="17091:31371"
      dataName="Корпоративные компетенции"
      onBack={onBack}
      onNavigate={onNavigate}
      onPrev={onPrev}
      onNext={onNext}
      scrollable
    >
      <div className="theory-content theory-competencies">
        <section className="theory-competencies__hero" aria-labelledby="competencies-heading">
          <div className="theory-competencies__hero-glow" aria-hidden="true">
            <img src={competenciesHeroGlow1} alt="" decoding="async" />
            <img src={competenciesHeroGlow2} alt="" decoding="async" />
          </div>

          <h2 id="competencies-heading" className="theory-content__section-title theory-competencies__title">
            Корпоративные компетенции
          </h2>

          <div className="theory-competencies__intro">
            <p className="theory-competencies__intro-text">
              Корпоративная система развития и оценки сотрудников базируется на лидерских компетенциях
            </p>
            <p className="theory-competencies__intro-text theory-competencies__intro-text--muted">
              Помогают нам лучше планировать задачи, которые можно делегировать сотрудникам для достижения
              наилучших результатов
            </p>
          </div>
        </section>

        <section className="theory-competencies__dna-head" aria-label="ДНК Лидера">
          <p className="theory-competencies__dna-lead">
            В нашей компании существует
            <br />
            21 лидерская компетенция:
          </p>
          <p className="theory-competencies__dna-sub">ДНК Лидера</p>
        </section>

        <section className="theory-competencies__grid" aria-label="Лидерские компетенции">
          <div className="theory-competencies__column">
            {COMPETENCIES_LEFT.map((card) => (
              <CompetencyCardItem key={card.title} {...card} />
            ))}
          </div>

          <div className="theory-competencies__dna" aria-hidden="true">
            <img src={competenciesDna} alt="" decoding="async" />
          </div>

          <div className="theory-competencies__column">
            {COMPETENCIES_RIGHT.map((card) => (
              <CompetencyCardItem key={card.title} {...card} />
            ))}
          </div>
        </section>

        <p className="theory-competencies__synthesis">
          Система компетенций создана для координирования задач и сотрудника, который с ней справится. В
          зависимости от уровня компетенции сотрудника, мы можем выявить вероятность выполнения задачи -
          т.е. достижения результата.
        </p>

        <section className="theory-competencies__scale" aria-labelledby="competencies-scale-heading">
          <h3 id="competencies-scale-heading" className="theory-competencies__scale-caption">
            От рождения люди более тяготеют либо в сторону аналитики, либо в сторону общения
          </h3>

          <div className="theory-competencies__scale-chart">
            <img
              className="theory-competencies__scale-line-v"
              src={competenciesScaleLineV}
              alt=""
              decoding="async"
            />
            <div className="theory-competencies__scale-labels">
              <span>Аналитик</span>
              <span>Переговорщик</span>
            </div>
            <img
              className="theory-competencies__scale-line-h"
              src={competenciesScaleLineH}
              alt=""
              decoding="async"
            />
            <div className="theory-competencies__scale-bars" aria-hidden="true">
              <span className="theory-competencies__scale-bar theory-competencies__scale-bar--left" />
              <span className="theory-competencies__scale-bar theory-competencies__scale-bar--right" />
            </div>
            <p className="theory-competencies__scale-leader">ЛИДЕР</p>
          </div>

          <p className="theory-competencies__scale-footer">
            Но в условиях постоянно меняющегося мира, наши сотрудники должны развивать в себе обе эти
            компетенции
          </p>
        </section>
      </div>
    </TheoryPageLayout>
  );
}
