import {
  strategyGlow,
  strategyLineDivider,
  strategyPhotoLeadersA,
  strategyPhotoLeadersB,
  strategyPhotoNovgorod,
  strategyPhotoPolytechA,
  strategyPhotoPolytechB,
  strategyPhotoPolytechC,
} from "./figma-assets";
import { TheoryPageLayout } from "./TheoryPageLayout";
import type { TheorySectionId } from "./theoryMenu";

type StrategyPageProps = {
  onBack: () => void;
  onNavigate: (section: TheorySectionId) => void;
  onPrev?: () => void;
  onNext?: () => void;
};

type StatBlockProps = {
  title: string;
  value: string;
  unit: string;
  text?: string;
  centered?: boolean;
};

function StatBlock({ title, value, unit, text, centered }: StatBlockProps) {
  return (
    <article className="theory-strategy-stat">
      <div className={`theory-strategy-stat__head${centered ? " theory-strategy-stat__head--center" : ""}`}>
        <h3 className="theory-strategy-stat__title">{title}</h3>
        <p className="theory-strategy-stat__metric">
          <span className="theory-strategy-stat__value">{value}</span>
          <span className="theory-strategy-stat__unit">{unit}</span>
        </p>
      </div>
      {!centered && text ? (
        <>
          <div className="theory-strategy-stat__divider" aria-hidden="true">
            <img src={strategyLineDivider} alt="" decoding="async" />
          </div>
          <p className="theory-strategy-stat__text">{text}</p>
        </>
      ) : null}
    </article>
  );
}

const IMPLEMENTATION_CARDS = [
  {
    title: "Алабуга Политех",
    text: "Создан современный производственно-образовательный центр «Алабуга Политех» по подготовке технологических предпринимателей, которые в дальнейшем смогут закрыть кадровую потребность управляющей компании и действующих резидентов Алабуги",
    layers: [strategyPhotoPolytechA, strategyPhotoPolytechB, strategyPhotoPolytechC],
  },
  {
    title: "100 Лидеров",
    text: "Запущена программа внутреннего и внешнего асcессмента и развития под названием «100 Лидеров», для выпускников высших учебных заведений с дальнейшим трудоустройством в управляющую компанию",
    layers: [strategyPhotoLeadersA, strategyPhotoLeadersB],
  },
  {
    title: "ОЭЗ «Новгородская»",
    text: "Создана ОЭЗ «Новгородская». Она расположилась в границах Новгородского района, недалеко от административного центра Великий Новгород",
    layers: [strategyPhotoNovgorod],
  },
] as const;

export function StrategyPage({ onBack, onNavigate, onPrev, onNext }: StrategyPageProps) {
  return (
    <TheoryPageLayout
      activeSection="strategy"
      dataNodeId="17018:58113"
      dataName="Стратегия развития"
      onBack={onBack}
      onNavigate={onNavigate}
      onPrev={onPrev}
      onNext={onNext}
      scrollable
    >
      <div className="theory-content">
        <section className="theory-content__section theory-strategy-hero" aria-labelledby="strategy-heading">
          <img className="theory-strategy-hero__glow" src={strategyGlow} alt="" decoding="async" />
          <h2 id="strategy-heading" className="theory-content__section-title theory-strategy-hero__title">
            Стратегия развития
          </h2>

          <div className="theory-strategy-infographic">
            <div className="theory-strategy-infographic__row">
              <div className="theory-strategy-infographic__left">
                <StatBlock
                  title="Импорт"
                  value="22"
                  unit="трлн. рублей"
                  text="На данный момент импорт в Россию составляет более 22 трлн. рублей, поэтому стратегически важная задача для страны - создавать собственные производства"
                />
                <StatBlock
                  title="Cобственных производств"
                  value="50"
                  unit="производств"
                  text="Vision компании предполагает создание не менее 50 собственных производств"
                />
              </div>
              <div className="theory-strategy-infographic__bars" aria-hidden="true">
                <span className="theory-strategy-infographic__bar" />
                <span className="theory-strategy-infographic__bar" />
              </div>
              <StatBlock
                title="Площадок"
                value="10"
                unit="по всей стране"
                text="Это предполагает, что на каждой из них работает команда лидеров - энергетиков, АСУТПшников, юристов, экономистов - людей, которые берут на себя ответственность за результат, решают проблемы и вносят улучшения, не дожидаясь команды сверху"
              />
            </div>

            <article className="theory-strategy-infographic__residents">
              <StatBlock title="Резидентов" value="43" unit="на 2025 год" centered />
            </article>
          </div>
        </section>

        <section className="theory-content__section" aria-labelledby="strategy-implementation-heading">
          <h2 id="strategy-implementation-heading" className="theory-strategy-section-heading">
            Реализация стратегии
          </h2>
          <div className="theory-strategy-grid">
            {IMPLEMENTATION_CARDS.map((card) => (
              <article key={card.title} className="theory-strategy-grid__card">
                <div className="theory-strategy-grid__photo">
                  {card.layers.map((src, index) => (
                    <img
                      key={src}
                      className="theory-strategy-grid__photo-layer"
                      src={src}
                      alt=""
                      decoding="async"
                      style={{ zIndex: index }}
                    />
                  ))}
                </div>
                <div className="theory-strategy-grid__body">
                  <h3 className="theory-strategy-grid__title">{card.title}</h3>
                  <p className="theory-strategy-grid__text">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </TheoryPageLayout>
  );
}
