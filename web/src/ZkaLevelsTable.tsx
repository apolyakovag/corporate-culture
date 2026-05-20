import { useRef, useState } from "react";
import {
  ZKA_LEVEL_COLUMNS,
  ZKA_LEVEL_STAGES,
  ZKA_PAGE_COPY,
  type ZkaLevelColumn,
} from "./zkaData";

function renderCellContent(value: string | string[] | undefined) {
  if (!value) return null;
  if (Array.isArray(value)) {
    return (
      <ol className="theory-zka__cell-list theory-zka__cell-list--ordered">
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }
  return <p className="theory-zka__cell-text">{value}</p>;
}

function LevelColumnHeader({ col }: { col: ZkaLevelColumn }) {
  const isPrimary = col.id === "4";
  return (
    <div className={`theory-zka__level-col-head${isPrimary ? "" : " theory-zka__level-col-head--muted"}`}>
      <div className="theory-zka__level-col-head-title">
        <span className="theory-zka__levels-col-title">{col.title}</span>
        <span className="theory-zka__levels-col-sub">{col.subtitle}</span>
      </div>
      <div className="theory-zka__level-col-signers">
        <div className="theory-zka__level-col-signer-row">
          <span>Подписывает</span>
          <span>{col.signer}</span>
        </div>
        <div className="theory-zka__level-col-signer-row">
          <span>Визирует</span>
          <span>{col.approver}</span>
        </div>
      </div>
    </div>
  );
}

function LevelCell({ content, muted }: { content: string | string[] | undefined; muted?: boolean }) {
  return (
    <div className={`theory-zka__level-cell${muted ? " theory-zka__level-cell--muted" : ""}`}>
      {renderCellContent(content)}
    </div>
  );
}

export function ZkaLevelsTable() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("4");

  const scrollToLevel = (levelId: string) => {
    setActiveTab(levelId);
    const el = scrollRef.current?.querySelector(`[data-level-id="${levelId}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <section className="theory-zka__levels" aria-labelledby="zka-levels-heading">
      <div className="theory-zka__levels-header">
        <h3 id="zka-levels-heading" className="theory-zka__levels-title">
          {ZKA_PAGE_COPY.levelsTitle}
        </h3>
        <div className="theory-zka__levels-pagination" role="tablist" aria-label="Уровни аналитики">
          <button type="button" className="theory-zka__levels-page-btn" disabled aria-label="Предыдущий">
            ‹
          </button>
          {ZKA_LEVEL_COLUMNS.map((col) => (
            <button
              key={col.id}
              type="button"
              role="tab"
              aria-selected={activeTab === col.id}
              className={`theory-zka__levels-tab${activeTab === col.id ? " theory-zka__levels-tab--active" : ""}`}
              onClick={() => scrollToLevel(col.id)}
            >
              {col.id}
            </button>
          ))}
          <button type="button" className="theory-zka__levels-page-btn" aria-label="Следующий">
            ›
          </button>
        </div>
      </div>

      <div className="theory-zka__levels-board">
        <aside className="theory-zka__levels-stages-col">
          <div className="theory-zka__levels-stages-head">
            <p>{ZKA_PAGE_COPY.stagesColumnTitle}</p>
          </div>
          {ZKA_LEVEL_STAGES.map((stage, index) => (
            <div key={stage.num} className="theory-zka__levels-stage-row">
              <span className="theory-zka__levels-stage-num">{stage.num}</span>
              {index < ZKA_LEVEL_STAGES.length - 1 ? (
                <span className="theory-zka__levels-stage-arrow" aria-hidden="true" />
              ) : null}
              <div className="theory-zka__levels-stage-text">
                <span className="theory-zka__levels-stage-title">{stage.title}</span>
                <span className="theory-zka__levels-stage-sub">{stage.subtitle}</span>
              </div>
            </div>
          ))}
        </aside>

        <div className="theory-zka__levels-scroll-wrap">
          <div className="theory-zka__levels-scroll" ref={scrollRef}>
            <div className="theory-zka__levels-columns">
              {ZKA_LEVEL_COLUMNS.map((col) => (
                <div key={col.id} className="theory-zka__level-column" data-level-id={col.id}>
                  <LevelColumnHeader col={col} />
                  {ZKA_LEVEL_STAGES.map((stage) => (
                    <LevelCell
                      key={stage.num}
                      content={stage.cells[col.id]}
                      muted={col.id !== "4"}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
