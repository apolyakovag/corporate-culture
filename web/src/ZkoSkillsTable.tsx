import { ZKO_PAGE_COPY, ZKO_SKILL_COLUMNS, ZKO_SKILL_LEVELS } from "./zkoData";

function renderCellContent(value: string | string[] | undefined) {
  if (!value) return null;
  if (Array.isArray(value)) {
    return (
      <ol className="theory-zko__cell-list theory-zko__cell-list--ordered">
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }
  return <p className="theory-zko__cell-text">{value}</p>;
}

export function ZkoSkillsTable() {
  return (
    <section className="theory-zko__skills" aria-labelledby="zko-skills-heading">
      <h3 id="zko-skills-heading" className="theory-zko__skills-title">
        {ZKO_PAGE_COPY.skillsTitle}
      </h3>

      <div className="theory-zko__skills-board">
        <aside className="theory-zko__skills-stages-col">
          <div className="theory-zko__skills-stages-head" aria-hidden="true" />
          {ZKO_SKILL_LEVELS.map((level) => (
            <div key={level.num} className="theory-zko__skills-stage-row">
              <span className="theory-zko__skills-stage-num">{level.num}</span>
              <span className="theory-zko__skills-stage-title">{level.title}</span>
            </div>
          ))}
        </aside>

        <div className="theory-zko__skills-scroll-wrap">
          <div className="theory-zko__skills-scroll">
            <div className="theory-zko__skills-columns">
              {ZKO_SKILL_COLUMNS.map((colTitle) => (
                <div key={colTitle} className="theory-zko__skill-column">
                  <div className="theory-zko__skill-col-head">
                    <span>{colTitle}</span>
                  </div>
                  {ZKO_SKILL_LEVELS.map((level) => {
                    const content =
                      colTitle === "Цель"
                        ? level.goal
                        : colTitle === "Подготовка"
                          ? level.preparation
                          : level.realization;
                    return (
                      <div key={`${level.num}-${colTitle}`} className="theory-zko__skill-cell">
                        {renderCellContent(content)}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
