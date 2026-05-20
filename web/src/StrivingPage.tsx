import {
  strivingHeroChevron,
  strivingHeroDecoLg,
  strivingHeroDecoMd,
  strivingHeroDecoSm,
  strivingHeroFigure,
  strivingHeroGlow,
} from "./figma-assets";
import { TheoryPageLayout } from "./TheoryPageLayout";
import type { TheorySectionId } from "./theoryMenu";

type StrivingPageProps = {
  onBack: () => void;
  onNavigate: (section: TheorySectionId) => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export function StrivingPage({ onBack, onNavigate, onPrev, onNext }: StrivingPageProps) {
  return (
    <TheoryPageLayout
      activeSection="striving"
      dataNodeId="17018:58116"
      dataName="Стремление к большему"
      onBack={onBack}
      onNavigate={onNavigate}
      onPrev={onPrev}
      onNext={onNext}
      scrollable
    >
      <div className="theory-content theory-striving">
        <section className="theory-striving__head" aria-labelledby="striving-heading">
          <h2 id="striving-heading" className="theory-content__section-title">
            Стремление к большему
          </h2>
          <p className="theory-striving__subtitle">Главная мотивация нашей компании</p>
        </section>

        <section className="theory-striving__stair" aria-label="О стремлении к большему">
          <article className="theory-striving__card theory-striving__card--left">
            <p className="theory-striving__card-text">
              Даже маленькие позитивные шаги вперед могут привести к достижению цели
            </p>
          </article>

          <article className="theory-striving__card theory-striving__card--center">
            <h3 className="theory-striving__card-title">
              Стремление к большему увеличивает эффективность любой деятельности
            </h3>
            <p className="theory-striving__card-text theory-striving__card-text--muted">
              Если человек хочет повысить собственную квалификацию, он самостоятельно обучается,
              совершенствует свои навыки и компетенции
            </p>
          </article>

          <article className="theory-striving__card theory-striving__card--right">
            <h3 className="theory-striving__card-title theory-striving__card-title--sm">
              Чтобы к чему-то стремиться, всегда нужны цели. Поставленные цели проясняют, во что мы
              вкладываем свои ресурсы
            </h3>
            <p className="theory-striving__card-text theory-striving__card-text--muted">
              Если довольствоваться тем, чего уже добился - начнется деградация. Не будет необходимости
              в приобретении новых знаний и навыков, постепенно будут забываться те, которые были
              приобретены ранее, так как отпадет нужда в их использовании
            </p>
          </article>

          <div className="theory-striving__visual" aria-hidden="true">
            <img className="theory-striving__visual-glow" src={strivingHeroGlow} alt="" decoding="async" />
            <img className="theory-striving__visual-chevron" src={strivingHeroChevron} alt="" decoding="async" />
            <img className="theory-striving__visual-figure" src={strivingHeroFigure} alt="" decoding="async" />
            <img className="theory-striving__visual-deco theory-striving__visual-deco--lg" src={strivingHeroDecoLg} alt="" decoding="async" />
            <img className="theory-striving__visual-deco theory-striving__visual-deco--md" src={strivingHeroDecoMd} alt="" decoding="async" />
            <img className="theory-striving__visual-deco theory-striving__visual-deco--sm" src={strivingHeroDecoSm} alt="" decoding="async" />
          </div>
        </section>

        <section className="theory-striving__matrix" aria-labelledby="striving-matrix-heading">
          <h3 id="striving-matrix-heading" className="theory-striving__matrix-title">
            Матрица оценки стремления к большему
          </h3>
          <div className="theory-striving__matrix-placeholder">
            <p>Место для контента</p>
          </div>
        </section>
      </div>
    </TheoryPageLayout>
  );
}
