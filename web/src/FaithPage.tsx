import {
  faithInfographicEllipse,
  faithInfographicGlowA,
  faithInfographicGlowB,
  faithInfographicGlowC,
  faithInfographicGlowD,
  faithInfographicGlowE,
  faithInfographicGlowF,
} from "./figma-assets";
import { TheoryPageLayout } from "./TheoryPageLayout";
import type { TheorySectionId } from "./theoryMenu";

type FaithPageProps = {
  onBack: () => void;
  onNavigate: (section: TheorySectionId) => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export function FaithPage({ onBack, onNavigate, onPrev, onNext }: FaithPageProps) {
  return (
    <TheoryPageLayout
      activeSection="faith"
      dataNodeId="17018:58119"
      dataName="Вера в дело"
      onBack={onBack}
      onNavigate={onNavigate}
      onPrev={onPrev}
      onNext={onNext}
      scrollable
    >
      <div className="theory-content theory-faith">
        <section className="theory-faith__body" aria-labelledby="faith-heading">
          <div className="theory-faith__infographic" aria-hidden="true">
            <img className="theory-faith__glow theory-faith__glow--a" src={faithInfographicGlowA} alt="" decoding="async" />
            <img className="theory-faith__glow theory-faith__glow--b" src={faithInfographicGlowB} alt="" decoding="async" />
            <img className="theory-faith__glow theory-faith__glow--c" src={faithInfographicGlowC} alt="" decoding="async" />
            <img className="theory-faith__glow theory-faith__glow--d" src={faithInfographicGlowD} alt="" decoding="async" />
            <img className="theory-faith__glow theory-faith__glow--e" src={faithInfographicGlowE} alt="" decoding="async" />
            <img className="theory-faith__glow theory-faith__glow--f" src={faithInfographicGlowF} alt="" decoding="async" />
            <img className="theory-faith__ellipse" src={faithInfographicEllipse} alt="" decoding="async" />
          </div>

          <div className="theory-faith__head">
            <h2 id="faith-heading" className="theory-content__section-title">
              Вера в дело
            </h2>
            <p className="theory-faith__subtitle">
              — фундамент, на котором строятся остальные компетенции нашей компании
            </p>
          </div>

          <article className="theory-faith__card">
            <p className="theory-faith__card-lead">
              Человек хочет развиваться, совершенствоваться и добиваться новых целей, только в случае
              искренней веры в свое дело
            </p>
            <p className="theory-faith__card-text">
              Когда он точно знает, зачем он это делает и к чему это приведет
            </p>
          </article>
        </section>
      </div>
    </TheoryPageLayout>
  );
}
