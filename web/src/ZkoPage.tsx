import {
  zkoAlgorithmFlow,
  zkoConditionIconNegotiations,
  zkoConditionIconSales,
  zkoConditionLinesBar,
  zkoHeroGlow,
  zkoStepConnectorDown,
  zkoStepConnectorUp,
  zkoStepIcons,
} from "./figma-assets";
import { TheoryPageLayout } from "./TheoryPageLayout";
import type { TheorySectionId } from "./theoryMenu";
import { ZkoSkillsTable } from "./ZkoSkillsTable";
import {
  ZKO_ALGORITHM_FALLBACK,
  ZKO_ALGORITHM_MAIN,
  ZKO_CONDITION_BLOCKS,
  ZKO_CONDITION_LINES,
  ZKO_CONCEPT_CARDS,
  ZKO_PAGE_COPY,
} from "./zkoData";

type ZkoPageProps = {
  onBack: () => void;
  onNavigate: (section: TheorySectionId) => void;
  onPrev?: () => void;
  onNext?: () => void;
};

type AlgorithmStep = {
  num: string;
  title: string;
  subtitle: string;
};

function AlgorithmStepCard({
  step,
  iconIndex,
  layout,
  connector,
}: {
  step: AlgorithmStep;
  iconIndex: number;
  layout: "top" | "bottom";
  connector: "down" | "up" | "none";
}) {
  const connectorSrc = connector === "down" ? zkoStepConnectorDown : connector === "up" ? zkoStepConnectorUp : null;

  return (
    <article className={`theory-zko__algorithm-step theory-zko__algorithm-step--${layout}`}>
      {layout === "top" ? (
        <>
          <div className="theory-zko__algorithm-step-text">
            <span className="theory-zko__algorithm-num">{step.num}</span>
            <p className="theory-zko__algorithm-title">{step.title}</p>
            <p className="theory-zko__algorithm-sub">{step.subtitle}</p>
          </div>
          <div className="theory-zko__algorithm-icon-wrap">
            <span className="theory-zko__algorithm-icon">
              <img src={zkoStepIcons[iconIndex]} alt="" decoding="async" />
            </span>
            {connectorSrc ? (
              <img className="theory-zko__algorithm-connector" src={connectorSrc} alt="" decoding="async" aria-hidden="true" />
            ) : (
              <span className="theory-zko__algorithm-connector-spacer" aria-hidden="true" />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="theory-zko__algorithm-icon-wrap">
            {connectorSrc ? (
              <img className="theory-zko__algorithm-connector" src={connectorSrc} alt="" decoding="async" aria-hidden="true" />
            ) : (
              <span className="theory-zko__algorithm-connector-spacer" aria-hidden="true" />
            )}
            <span className="theory-zko__algorithm-icon">
              <img src={zkoStepIcons[iconIndex]} alt="" decoding="async" />
            </span>
          </div>
          <div className="theory-zko__algorithm-step-text">
            <span className="theory-zko__algorithm-num">{step.num}</span>
            <p className="theory-zko__algorithm-title">{step.title}</p>
            <p className="theory-zko__algorithm-sub">{step.subtitle}</p>
          </div>
        </>
      )}
    </article>
  );
}

const FALLBACK_CONNECTORS: Array<"up" | "none"> = ["up", "none", "up", "none"];

export function ZkoPage({ onBack, onNavigate, onPrev, onNext }: ZkoPageProps) {
  return (
    <TheoryPageLayout
      activeSection="zko"
      dataNodeId="17186:44498"
      dataName="ЗКО"
      onBack={onBack}
      onNavigate={onNavigate}
      onPrev={onPrev}
      onNext={onNext}
      scrollable
    >
      <div className="theory-content theory-zko">
        <section className="theory-zko__hero" aria-labelledby="zko-heading">
          <img className="theory-zko__hero-glow" src={zkoHeroGlow} alt="" decoding="async" aria-hidden="true" />
          <div className="theory-zko__hero-text">
            <h2 id="zko-heading" className="theory-zko__hero-title">
              {ZKO_PAGE_COPY.heroTitle}
            </h2>
            <p className="theory-zko__hero-subtitle">{ZKO_PAGE_COPY.heroSubtitle}</p>
          </div>
          <button type="button" className="theory-zko__hero-cta">
            Пройти тренажер
          </button>
        </section>

        <section className="theory-zko__card theory-zko__card--algorithm" aria-labelledby="zko-algorithm-heading">
          <h3 id="zko-algorithm-heading" className="theory-zko__card-title theory-zko__card-title--muted">
            {ZKO_PAGE_COPY.algorithmTitle}
          </h3>
          <div className="theory-zko__algorithm-layout">
            <div className="theory-zko__algorithm-flow">
              <div className="theory-zko__algorithm-row theory-zko__algorithm-row--main">
                {ZKO_ALGORITHM_MAIN.map((step, index) => (
                  <AlgorithmStepCard key={step.num} step={step} iconIndex={index} layout="top" connector="down" />
                ))}
              </div>
              <div className="theory-zko__algorithm-flow-divider">
                <img
                  className="theory-zko__algorithm-flow-img"
                  src={zkoAlgorithmFlow}
                  alt=""
                  decoding="async"
                  aria-hidden="true"
                />
                <p className="theory-zko__algorithm-fallback-label">{ZKO_PAGE_COPY.fallbackLabel}</p>
              </div>
              <div className="theory-zko__algorithm-row theory-zko__algorithm-row--fallback">
                {ZKO_ALGORITHM_FALLBACK.map((step, index) => (
                  <AlgorithmStepCard
                    key={step.num}
                    step={step}
                    iconIndex={index + 3}
                    layout="bottom"
                    connector={FALLBACK_CONNECTORS[index]}
                  />
                ))}
              </div>
            </div>
            <aside className="theory-zko__algorithm-result">
              <div className="theory-zko__algorithm-result-head">
                <span className="theory-zko__algorithm-num">08</span>
                <span className="theory-zko__algorithm-result-icon">
                  <img src={zkoStepIcons[7]} alt="" decoding="async" />
                </span>
              </div>
              <h4 className="theory-zko__algorithm-result-title">{ZKO_PAGE_COPY.resultTitle}</h4>
              <p className="theory-zko__algorithm-result-text">{ZKO_PAGE_COPY.resultText}</p>
            </aside>
          </div>
        </section>

        <div className="theory-zko__section-group">
          <section className="theory-zko__card" aria-labelledby="zko-lines-heading">
            <h3 id="zko-lines-heading" className="theory-zko__card-title theory-zko__card-title--muted">
              {ZKO_PAGE_COPY.linesTitle}
            </h3>
            <div className="theory-zko__lines-grid">
              {ZKO_CONDITION_LINES.map((line) => (
                <div key={line.title} className={`theory-zko__line-item theory-zko__line-item--${line.color}`}>
                  <h4 className="theory-zko__line-title">{line.title}</h4>
                  <p className="theory-zko__line-text">{line.text}</p>
                </div>
              ))}
            </div>
            <img className="theory-zko__lines-bar" src={zkoConditionLinesBar} alt="" decoding="async" aria-hidden="true" />
          </section>

          <div className="theory-zko__concepts">
            {ZKO_CONCEPT_CARDS.map((card) => (
              <article key={card.title} className="theory-zko__concept-card">
                <h4 className="theory-zko__concept-title">{card.title}</h4>
                <p className="theory-zko__concept-text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>

        <ZkoSkillsTable />

        <section className="theory-zko__conditions" aria-labelledby="zko-conditions-heading">
          <div className="theory-zko__conditions-intro">
            <h3 id="zko-conditions-heading" className="theory-zko__card-title theory-zko__card-title--muted">
              {ZKO_PAGE_COPY.conditionsTitle}
            </h3>
            <p className="theory-zko__conditions-sub">{ZKO_PAGE_COPY.conditionsSubtitle}</p>
          </div>
          <div className="theory-zko__conditions-cards">
            {ZKO_CONDITION_BLOCKS.map((block, blockIndex) => (
              <article key={block.id} className="theory-zko__condition-item">
                <img
                  className="theory-zko__condition-icon"
                  src={blockIndex === 0 ? zkoConditionIconNegotiations : zkoConditionIconSales}
                  alt=""
                  decoding="async"
                />
                <span className="theory-zko__condition-divider" aria-hidden="true" />
                <div className="theory-zko__condition-body">
                  <h4 className="theory-zko__condition-title">{block.title}</h4>
                  <div
                    className={`theory-zko__condition-columns${block.sections.length === 1 ? " theory-zko__condition-columns--single" : ""}`}
                  >
                    {block.sections.map((section) => (
                      <div key={section.lead} className="theory-zko__condition-section">
                        <p className="theory-zko__condition-lead">{section.lead}</p>
                        <ul className="theory-zko__condition-list">
                          {section.bullets.map((bullet) => (
                            <li key={bullet.highlight}>
                              <span className="theory-zko__condition-highlight">{bullet.highlight}</span>
                              {bullet.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </TheoryPageLayout>
  );
}
