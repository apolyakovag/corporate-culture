import {
  zkaAlgorithmLine,
  zkaAlgorithmWave,
  zkaCalcArrow,
  zkaConditionIconBp,
  zkaConditionIconPir,
  zkaConditionIconResidents,
  zkaConditionIconShop,
  zkaHeroGlow,
  zkaMountainGlowA,
  zkaMountainGlowB,
  zkaMountainLayer1,
  zkaMountainLayer2,
  zkaMountainLayer3,
  zkaMountainLayer4,
  zkaMountainLayer5,
  zkaMountainLayer6,
  zkaNpvFormula,
  zkaSeparator,
  zkaStepIcons,
} from "./figma-assets";
import { TheoryPageLayout } from "./TheoryPageLayout";
import type { TheorySectionId } from "./theoryMenu";
import { ZkaLevelsTable } from "./ZkaLevelsTable";
import {
  ZKA_ALGORITHM_STEPS,
  ZKA_BP_TABLE,
  ZKA_CALCULATION_STEPS,
  ZKA_MOUNTAIN_LEVELS,
  ZKA_PAGE_COPY,
} from "./zkaData";

type ZkaPageProps = {
  onBack: () => void;
  onNavigate: (section: TheorySectionId) => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export function ZkaPage({ onBack, onNavigate, onPrev, onNext }: ZkaPageProps) {
  const calc01 = ZKA_CALCULATION_STEPS[0];
  const calc02 = ZKA_CALCULATION_STEPS[1];
  const calc03 = ZKA_CALCULATION_STEPS[2];

  return (
    <TheoryPageLayout
      activeSection="zka"
      dataNodeId="17018:58127"
      dataName="ЗКА"
      onBack={onBack}
      onNavigate={onNavigate}
      onPrev={onPrev}
      onNext={onNext}
      scrollable
    >
      <div className="theory-content theory-zka">
        <section className="theory-zka__hero" aria-labelledby="zka-heading">
          <img className="theory-zka__hero-glow" src={zkaHeroGlow} alt="" decoding="async" aria-hidden="true" />
          <h2 id="zka-heading" className="theory-content__section-title theory-zka__hero-title">
            {ZKA_PAGE_COPY.heroTitle}
          </h2>
          <p className="theory-zka__hero-subtitle">
            {ZKA_PAGE_COPY.heroSubtitleBefore}
            <span className="theory-zka__hero-highlight">{ZKA_PAGE_COPY.heroHighlight}</span>
            {ZKA_PAGE_COPY.heroSubtitleAfter}
          </p>
          <button type="button" className="theory-zka__hero-cta">
            Пройти тренажер
          </button>
        </section>

        <section className="theory-zka__card" aria-labelledby="zka-algorithm-heading">
          <h3 id="zka-algorithm-heading" className="theory-zka__card-title">
            {ZKA_PAGE_COPY.algorithmTitle}
          </h3>
          <img className="theory-zka__card-separator" src={zkaSeparator} alt="" decoding="async" aria-hidden="true" />
          <div className="theory-zka__algorithm">
            <img className="theory-zka__algorithm-wave" src={zkaAlgorithmWave} alt="" decoding="async" aria-hidden="true" />
            <img className="theory-zka__algorithm-line" src={zkaAlgorithmLine} alt="" decoding="async" aria-hidden="true" />
            <div className="theory-zka__algorithm-grid">
              {ZKA_ALGORITHM_STEPS.map((step, index) => (
                <article
                  key={step.num}
                  className={`theory-zka__algorithm-step theory-zka__algorithm-step--${step.row}`}
                  style={{ gridColumn: step.gridColumn }}
                >
                  {step.row === "top" ? (
                    <>
                      <span className="theory-zka__algorithm-num">{step.num}</span>
                      <p className="theory-zka__algorithm-label">
                        {step.title}
                        {step.titleLine2 ? (
                          <>
                            <br />
                            {step.titleLine2}
                          </>
                        ) : null}
                      </p>
                      <span className="theory-zka__algorithm-icon" style={{ backgroundColor: step.color }}>
                        <img src={zkaStepIcons[index]} alt="" decoding="async" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="theory-zka__algorithm-icon" style={{ backgroundColor: step.color }}>
                        <img src={zkaStepIcons[index]} alt="" decoding="async" />
                      </span>
                      <span className="theory-zka__algorithm-num">{step.num}</span>
                      <p className="theory-zka__algorithm-label">{step.title}</p>
                    </>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <ZkaLevelsTable />

        <section className="theory-zka__conditions" aria-labelledby="zka-conditions-heading">
          <div className="theory-zka__conditions-intro">
            <h3 id="zka-conditions-heading" className="theory-zka__card-title">
              {ZKA_PAGE_COPY.conditionsTitle}
            </h3>
            <p className="theory-zka__conditions-sub">{ZKA_PAGE_COPY.conditionsSubtitle}</p>
          </div>

          <div className="theory-zka__conditions-layout">
            <div className="theory-zka__mountain-card">
              <img className="theory-zka__mountain-glow theory-zka__mountain-glow--a" src={zkaMountainGlowA} alt="" decoding="async" aria-hidden="true" />
              <img className="theory-zka__mountain-glow theory-zka__mountain-glow--b" src={zkaMountainGlowB} alt="" decoding="async" aria-hidden="true" />
              <div className="theory-zka__mountain" aria-hidden="true">
                <img className="theory-zka__mountain-layer theory-zka__mountain-layer--1" src={zkaMountainLayer1} alt="" decoding="async" />
                <img className="theory-zka__mountain-layer theory-zka__mountain-layer--2" src={zkaMountainLayer2} alt="" decoding="async" />
                <img className="theory-zka__mountain-layer theory-zka__mountain-layer--3" src={zkaMountainLayer3} alt="" decoding="async" />
                <img className="theory-zka__mountain-layer theory-zka__mountain-layer--4" src={zkaMountainLayer4} alt="" decoding="async" />
                <img className="theory-zka__mountain-layer theory-zka__mountain-layer--5" src={zkaMountainLayer5} alt="" decoding="async" />
                <img className="theory-zka__mountain-layer theory-zka__mountain-layer--6" src={zkaMountainLayer6} alt="" decoding="async" />
                {ZKA_MOUNTAIN_LEVELS.map((level) => (
                  <div
                    key={level.label}
                    className={`theory-zka__mountain-badge theory-zka__mountain-badge--${level.size}`}
                  >
                    <span className="theory-zka__mountain-badge-label">{level.label}</span>
                    <span className="theory-zka__mountain-badge-sub">{level.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="theory-zka__conditions-cards">
              <article className="theory-zka__condition-item">
                <img className="theory-zka__condition-icon" src={zkaConditionIconShop} alt="" decoding="async" />
                <div className="theory-zka__condition-body">
                  <h4 className="theory-zka__condition-title">Закупки и продажи</h4>
                  <p>Если «Алабуга»:</p>
                  <ul className="theory-zka__condition-list">
                    <li>
                      <span className="theory-zka__condition-highlight">проводит закупку / СМР</span>
                      {" "}- то используем таблицу (Уровень аналитики в зависимости от суммы)
                    </li>
                    <li>
                      <span className="theory-zka__condition-highlight">продает</span>
                      {" "}- то по согласованию с руководителем, в соответствии с требованиями клиента
                    </li>
                  </ul>
                </div>
              </article>

              <article className="theory-zka__condition-item">
                <img className="theory-zka__condition-icon" src={zkaConditionIconBp} alt="" decoding="async" />
                <div className="theory-zka__condition-body">
                  <h4 className="theory-zka__condition-title">Бизнес-план (БП)</h4>
                  <p>
                    Здесь смотрим на <span className="theory-zka__condition-highlight">Мощность (МВт)</span> или на
                    то, кто автор:
                  </p>
                  <div className="theory-zka__bp-table">
                    <div className="theory-zka__bp-table-head">
                      <span>Ситуация</span>
                      <span>Уровень аналитики</span>
                    </div>
                    {ZKA_BP_TABLE.map((row) => (
                      <div key={row.situation} className="theory-zka__bp-table-row">
                        <span>{row.situation}</span>
                        <span>{row.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="theory-zka__condition-item">
                <img className="theory-zka__condition-icon" src={zkaConditionIconPir} alt="" decoding="async" />
                <div className="theory-zka__condition-body">
                  <h4 className="theory-zka__condition-title">ПИР, СМР</h4>
                  <p>
                    При выборе <span className="theory-zka__condition-highlight">подрядчика “ПИР”</span>, аналитика
                    проводится в соответствии с таблицей:
                  </p>
                  <ul className="theory-zka__condition-list">
                    <li>
                      Если «Алабуга» делает <span className="theory-zka__condition-highlight">“ПИР”</span>, то в
                      части принимаемых инженерных решений аналитика проводится в соответствии с таблицей
                    </li>
                    <li>
                      Аналитика проводится совместной подкомиссией{" "}
                      <strong>внутреннего / внешнего Заказчика, УКС, Эксплуатации</strong>
                    </li>
                    <li>
                      Для ценовых параметров при <span className="theory-zka__condition-highlight">“ПИР”</span>{" "}
                      достаточен <strong>уровень 6 (Федеральный)</strong>
                    </li>
                    <li>
                      На стадии <span className="theory-zka__condition-highlight">“СМР”</span> аналитика проводится в{" "}
                      <strong>соответствие с таблицей</strong>
                    </li>
                  </ul>
                </div>
              </article>

              <article className="theory-zka__condition-item theory-zka__condition-item--last">
                <img className="theory-zka__condition-icon" src={zkaConditionIconResidents} alt="" decoding="async" />
                <div className="theory-zka__condition-body">
                  <h4 className="theory-zka__condition-title">Работа с резидентами</h4>
                  <p>
                    При работе с резидентами уровень проведения аналитики{" "}
                    <span className="theory-zka__condition-highlight">увеличивается в 3 раза</span>
                  </p>
                  <p className="theory-zka__condition-note">
                    Например: если сумма контракта с Кастамону составляет 400.000 ₽, то аналитика проводится минимум
                    на 7 уровне (Мировые практики)
                  </p>
                  <p className="theory-zka__condition-note">400.000 * 3 = 1.200.000 ₽</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="theory-zka__calculation" aria-labelledby="zka-calc-heading">
          <h3 id="zka-calc-heading" className="theory-zka__card-title theory-zka__calculation-title">
            {ZKA_PAGE_COPY.calculationTitle}
          </h3>

          <article className="theory-zka__calc-step">
            <div className="theory-zka__calc-head">
              <span className="theory-zka__calc-num">{calc01.num}</span>
              <div className="theory-zka__calc-titles">
                <span>{calc01.titles[0]}</span>
                <img src={zkaCalcArrow} alt="" decoding="async" aria-hidden="true" />
                <span>{calc01.titles[1]}</span>
              </div>
            </div>
            <div className="theory-zka__calc-card theory-zka__calc-card--margin">
              <div className="theory-zka__calc-card-text">
                <p>
                  <span className="theory-zka__calc-accent">Маржа</span> {calc01.marginText}
                </p>
                <p>
                  <span className="theory-zka__calc-accent">Наценка </span>
                  <span className="theory-zka__calc-muted">{calc01.markupText}</span>
                </p>
                <p>
                  <span className="theory-zka__calc-accent">В себестоимость</span>
                  <span className="theory-zka__calc-muted"> {calc01.costText.replace("В себестоимость", "").trim()}</span>
                </p>
              </div>
              <div className="theory-zka__margin-diagram" aria-hidden="true">
                <div className="theory-zka__margin-block theory-zka__margin-block--markup">
                  <span>Наценка</span>
                  <strong>50%</strong>
                </div>
                <div className="theory-zka__margin-block theory-zka__margin-block--cost">
                  <span>Себестоимость</span>
                </div>
                <div className="theory-zka__margin-block theory-zka__margin-block--margin">
                  <span>Маржа</span>
                  <strong>33%</strong>
                </div>
                <span className="theory-zka__margin-price-label">Цена продажи</span>
              </div>
            </div>
          </article>

          <article className="theory-zka__calc-step">
            <div className="theory-zka__calc-head">
              <span className="theory-zka__calc-num">{calc02.num}</span>
              <span className="theory-zka__calc-titles">{calc02.titles[0]}</span>
            </div>
            <div className="theory-zka__calc-card">
              <p className="theory-zka__calc-formula">{calc02.formula}</p>
              <div className="theory-zka__calc-two-col">
                <p>
                  <span className="theory-zka__calc-accent">Хвостик </span>
                  <span className="theory-zka__calc-muted">— {calc02.tailLead.replace("Хвостик — ", "")}</span>
                </p>
                <p>{calc02.tailNote}</p>
              </div>
            </div>
          </article>

          <article className="theory-zka__calc-step">
            <div className="theory-zka__calc-head">
              <span className="theory-zka__calc-num">{calc03.num}</span>
              <span className="theory-zka__calc-titles">{calc03.titles[0]}</span>
            </div>
            <div className="theory-zka__calc-card theory-zka__calc-card--npv">
              <div className="theory-zka__calc-npv-text">
                <p>
                  <span className="theory-zka__calc-accent">{calc03.npvTitle}</span> {calc03.npvText}
                </p>
                <p>{calc03.npvSimple}</p>
                <p className="theory-zka__calc-muted">{calc03.npvVars}</p>
              </div>
              <img className="theory-zka__npv-formula" src={zkaNpvFormula} alt="Формула NPV" decoding="async" />
            </div>
          </article>
        </section>
      </div>
    </TheoryPageLayout>
  );
}
