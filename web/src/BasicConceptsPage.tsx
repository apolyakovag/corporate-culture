import {
  theoryHeroChevron,
  theoryHeroDecoLg,
  theoryHeroDecoMd,
  theoryHeroDecoSm,
  theoryHeroGlow,
  theoryHeroGlow2,
} from "./figma-assets";
import { TheoryPageLayout } from "./TheoryPageLayout";
import type { TheorySectionId } from "./theoryMenu";

type BasicConceptsPageProps = {
  onBack: () => void;
  onNavigate: (section: TheorySectionId) => void;
  onPrev?: () => void;
  onNext?: () => void;
};

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

export function BasicConceptsPage({ onBack, onNavigate, onPrev, onNext }: BasicConceptsPageProps) {
  return (
    <TheoryPageLayout
      activeSection="concepts"
      dataNodeId="17018:58108"
      dataName="КК/Основные понятия"
      onBack={onBack}
      onNavigate={onNavigate}
      onPrev={onPrev}
      onNext={onNext}
    >
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
    </TheoryPageLayout>
  );
}
