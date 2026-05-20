import {
  missionMainGroup,
  valueCardBase,
  valueCardClientComfort,
  valueCardComfortZone,
  valueCardResults,
} from "./figma-assets";
import { TheoryPageLayout } from "./TheoryPageLayout";
import type { TheorySectionId } from "./theoryMenu";

type MissionValuesPageProps = {
  onBack: () => void;
  onNavigate: (section: TheorySectionId) => void;
  onPrev?: () => void;
  onNext?: () => void;
};

const MISSION_QUOTE =
  "«Мы растим промышленность для благополучия людей, создавая лучшую в мире инфраструктуру»";

const MISSION_PARAGRAPHS = [
  {
    variant: "body" as const,
    text: "Нам предстоит не просто привлекать новых инвесторов в заводы, как мы делали это на протяжении 10 первых лет существования «Алабуги». Сегодня стоит задача растить и развивать новые российские производства – у нас есть для этого и знания, и собственные ресурсы, и хорошие отношения с федеральными институтами развития",
  },
  {
    variant: "muted" as const,
    text: "Сами по себе заводы – это не самоцель. Но заводы – это налоги для государства и это заработная плата для людей. Поэтому в конечном итоге, мы все делаем для благополучия людей",
  },
  {
    variant: "medium" as const,
    text: "Лучшая в мире инфраструктура – это не только автомобильные и железные дороги, электричество и водопровод. Сейчас мы должны создать лучшую в мире инфраструктуру поддержки роста новых производств. Это предполагает и финансовую, и HR-инфраструктуру",
  },
];

const VALUE_CARDS = [
  {
    title: "ЭТО НАША КОМПАНИЯ, ЭТО НАША СТРАНА",
    text: "Каждый лидер, вне зависимости от должности, которую он занимает, берет на себя ответственность. Он не делегирует наверх проблемы – он предлагает решения. Если он видит неэффективность, то старается устранить ее, если видит проблему, то решает её. И в целом это наша страна. Невозможно быть островком инфраструктуры мирового уровня в море недоремонта. Поэтому если мы видим в нашей стране неэффективность, и никто эту неэффективность не устраняет, то это будем делать мы.",
    overlay: null,
  },
  {
    title: "ЗОНА КОМФОРТА И ДОСТИЖЕНИЙ НАХОДИТСЯ В ПАРЕ ШАГОВ ОТ ЗОНЫ КОМФОРТА",
    text: "Для настоящих достижений, для настоящего развития необходимо выходить из зоны комфорта. Не получится сидеть и радоваться существующим компетенциям, существующим знаниям, не анализировать сложные вещи, не звонить неприятным людям",
    overlay: valueCardComfortZone,
  },
  {
    title: "МЫ ВСЕГДА ВЫХОДИМ ИЗ ЗОНЫ КОМФОРТА ДЛЯ ОБЕСПЕЧЕНИЯ КОМФОРТА КЛИЕНТОВ",
    text: "Мы думаем о реальных потребностях клиентов, об их чаяниях, о том, что мы можем для них сделать. И здесь важно понимать, что клиенты бывают как внешние, так и внутренние. Внутри компании у сотрудников тоже есть клиенты, и для их комфорта сотрудникам также следует выходить из зоны собственного комфорта",
    overlay: valueCardClientComfort,
  },
  {
    title: "КАЖДОМУ ПО РЕЗУЛЬТАТУ",
    text: "В Советском Союзе был лозунг «Каждому по труду!» У нас в «Алабуге» не так. Мы оцениваем людей по результату. Если наш сотрудник не достиг результата, не вышел из зоны комфорта, чтобы достичь его, то он не может рассчитывать на поощрение. Наоборот – его будут порицать за бездействие, за лень!",
    overlay: valueCardResults,
  },
] as const;

export function MissionValuesPage({ onBack, onNavigate, onPrev, onNext }: MissionValuesPageProps) {
  return (
    <TheoryPageLayout
      activeSection="mission"
      dataNodeId="17018:58110"
      dataName="Миссия и ценности"
      onBack={onBack}
      onNavigate={onNavigate}
      onPrev={onPrev}
      onNext={onNext}
      scrollable
    >
      <div className="theory-content">
        <section className="theory-content__section" aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="theory-content__section-title">
            Миссия компании
          </h2>
          <div className="theory-mission">
            <div className="theory-mission__quote-card">
              <img className="theory-mission__glow" src={missionMainGroup} alt="" decoding="async" />
              <p className="theory-mission__quote">{MISSION_QUOTE}</p>
            </div>
            <div className="theory-mission__text">
              <div className="theory-mission__paragraphs">
                {MISSION_PARAGRAPHS.slice(0, 2).map((p) => (
                  <p
                    key={p.text.slice(0, 24)}
                    className={`theory-mission__p theory-mission__p--${p.variant}`}
                  >
                    {p.text}
                  </p>
                ))}
              </div>
              <p className="theory-mission__p theory-mission__p--medium">{MISSION_PARAGRAPHS[2].text}</p>
            </div>
          </div>
        </section>

        <section className="theory-content__section" aria-labelledby="values-heading">
          <h2 id="values-heading" className="theory-content__section-title">
            Ценности компании
          </h2>
          <div className="theory-values">
            {VALUE_CARDS.map((card) => (
              <article key={card.title} className="theory-values__item">
                <div className="theory-values__visual">
                  <img className="theory-values__visual-bg" src={valueCardBase} alt="" decoding="async" />
                  {card.overlay ? (
                    <img className="theory-values__visual-art" src={card.overlay} alt="" decoding="async" />
                  ) : null}
                </div>
                <div className="theory-values__body">
                  <h3 className="theory-values__title">{card.title}</h3>
                  <p className="theory-values__text">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </TheoryPageLayout>
  );
}
