import {
  decompForwardDiagram,
  decompForwardGlowA,
  decompForwardGlowB,
  decompHeroGlowA,
  decompHeroGlowB,
  decompHeroIllustration,
  decompInfoIcon,
} from "./figma-assets";
import { DecompositionTasksTable } from "./DecompositionTasksTable";
import { TheoryPageLayout } from "./TheoryPageLayout";
import type { TheorySectionId } from "./theoryMenu";
import {
  DECOMP_GOAL_BLOCKS,
  DECOMP_PAGE_COPY,
  DECOMP_SMART_ROWS,
  type DecompRichTextPart,
} from "./decompData";

type DecompositionPageProps = {
  onBack: () => void;
  onNavigate: (section: TheorySectionId) => void;
  onPrev?: () => void;
  onNext?: () => void;
};

function RichParagraph({ parts }: { parts: DecompRichTextPart[] }) {
  return (
    <p className="theory-decomp__rich-text">
      {parts.map((part, index) =>
        part.highlight ? (
          <span key={index} className="theory-decomp__rich-highlight">
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </p>
  );
}

export function DecompositionPage({ onBack, onNavigate, onPrev, onNext }: DecompositionPageProps) {
  const [mboBlock, diBlock] = DECOMP_GOAL_BLOCKS;

  return (
    <TheoryPageLayout
      activeSection="decomposition"
      dataNodeId="17018:58120"
      dataName="Декомпозиция"
      onBack={onBack}
      onNavigate={onNavigate}
      onPrev={onPrev}
      onNext={onNext}
      scrollable
    >
      <div className="theory-content theory-decomp">
        <header className="theory-decomp__head">
          <h2 className="theory-decomp__title">{DECOMP_PAGE_COPY.heroTitle}</h2>
          <p className="theory-decomp__subtitle">{DECOMP_PAGE_COPY.heroSubtitle}</p>
        </header>

        <section className="theory-decomp__intro" aria-label="Описание декомпозиции">
          <div className="theory-decomp__intro-visual" aria-hidden="true">
            <img className="theory-decomp__hero-glow theory-decomp__hero-glow--a" src={decompHeroGlowA} alt="" decoding="async" />
            <img className="theory-decomp__hero-glow theory-decomp__hero-glow--b" src={decompHeroGlowB} alt="" decoding="async" />
            <img className="theory-decomp__hero-illustration" src={decompHeroIllustration} alt="" decoding="async" />
          </div>
          <div className="theory-decomp__intro-text">
            <article className="theory-decomp__intro-card theory-decomp__intro-card--primary">
              <p>{DECOMP_PAGE_COPY.introPrimary}</p>
            </article>
            <article className="theory-decomp__intro-card">
              <p>{DECOMP_PAGE_COPY.introSecondary}</p>
            </article>
          </div>
        </section>

        <section className="theory-decomp__concepts" aria-label="SMART и Forward">
          <article className="theory-decomp__concept-card theory-decomp__concept-card--smart">
            <h3 className="theory-decomp__concept-title">SMART</h3>
            <ul className="theory-decomp__smart-list">
              {DECOMP_SMART_ROWS.map((row) => (
                <li key={row.letter} className="theory-decomp__smart-row">
                  <span className="theory-decomp__smart-letter">{row.letter}</span>
                  <div className="theory-decomp__smart-labels">
                    <span className="theory-decomp__smart-en">{row.en}</span>
                    <span className="theory-decomp__smart-ru">{row.ru}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="theory-decomp__concept-footer">{DECOMP_PAGE_COPY.smartFooter}</p>
          </article>

          <article className="theory-decomp__concept-card theory-decomp__concept-card--forward">
            <h3 className="theory-decomp__concept-title">Forward</h3>
            <div className="theory-decomp__forward-body">
              <div className="theory-decomp__forward-diagram-wrap" aria-hidden="true">
                <img className="theory-decomp__forward-glow theory-decomp__forward-glow--a" src={decompForwardGlowA} alt="" decoding="async" />
                <img className="theory-decomp__forward-glow theory-decomp__forward-glow--b" src={decompForwardGlowB} alt="" decoding="async" />
                <img className="theory-decomp__forward-diagram" src={decompForwardDiagram} alt="" decoding="async" />
              </div>
              <p className="theory-decomp__forward-label" aria-hidden="true">
                FORWARD
              </p>
            </div>
            <p className="theory-decomp__concept-footer">{DECOMP_PAGE_COPY.forwardFooter}</p>
          </article>
        </section>

        <DecompositionTasksTable />

        <section className="theory-decomp__goals" aria-labelledby="decomp-goals-heading">
          <h3 id="decomp-goals-heading" className="theory-decomp__goals-intro">
            {DECOMP_PAGE_COPY.goalsIntro}
          </h3>
          <div className="theory-decomp__goals-grid">
            <article className="theory-decomp__goal-card theory-decomp__goal-card--mbo">
              <h4 className="theory-decomp__goal-title">{mboBlock.title}</h4>
              <RichParagraph parts={mboBlock.description} />
              <ol className="theory-decomp__goal-steps">
                {mboBlock.steps.map((step, index) => (
                  <li key={step}>
                    <span className="theory-decomp__step-badge">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="theory-decomp__goal-notes">
                <img className="theory-decomp__goal-info-icon" src={decompInfoIcon} alt="" decoding="async" aria-hidden="true" />
                <div>
                  {mboBlock.notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
            </article>

            <article className="theory-decomp__goal-card theory-decomp__goal-card--di">
              <h4 className="theory-decomp__goal-title">{diBlock.title}</h4>
              <RichParagraph parts={diBlock.description} />
              <ol className="theory-decomp__goal-steps">
                {diBlock.steps.map((step, index) => (
                  <li key={step}>
                    <span className="theory-decomp__step-badge">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="theory-decomp__goal-notes">
                <img className="theory-decomp__goal-info-icon" src={decompInfoIcon} alt="" decoding="async" aria-hidden="true" />
                <div>
                  {diBlock.notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </TheoryPageLayout>
  );
}
