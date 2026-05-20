import {
  DECOMP_LEVEL_ROWS,
  DECOMP_PAGE_COPY,
  type DecompMetric,
} from "./decompData";

function MetricCell({ metric }: { metric: DecompMetric }) {
  return (
    <span className={`theory-decomp__metric theory-decomp__metric--${metric.tone}`}>{metric.value}</span>
  );
}

function TextCell({ value }: { value: string }) {
  return <span className="theory-decomp__text-cell">{value}</span>;
}

export function DecompositionTasksTable() {
  return (
    <section className="theory-decomp__tasks" aria-labelledby="decomp-tasks-heading">
      <h3 id="decomp-tasks-heading" className="theory-decomp__tasks-title">
        {DECOMP_PAGE_COPY.tasksTitle}
      </h3>

      <div className="theory-decomp__tasks-board">
        <aside className="theory-decomp__levels-col">
          <div className="theory-decomp__levels-head">
            <p>
              Уровни
              <br />
              декомпозиции
            </p>
          </div>
          {DECOMP_LEVEL_ROWS.map((row) => (
            <div key={row.num} className="theory-decomp__level-row">
              <span className="theory-decomp__level-num">{row.num}</span>
              <p className="theory-decomp__level-desc">{row.description}</p>
            </div>
          ))}
        </aside>

        <div className="theory-decomp__table-scroll-wrap">
          <div className="theory-decomp__table-scroll">
            <div className="theory-decomp__table-grid">
              <div className="theory-decomp__col-group">
                <div className="theory-decomp__col-group-head">
                  <p>Без декомпозиции</p>
                </div>
                <div className="theory-decomp__col-group-body">
                  <div className="theory-decomp__metric-col">
                    <div className="theory-decomp__subhead">
                      <p>Результат</p>
                    </div>
                    {DECOMP_LEVEL_ROWS.map((row) => (
                      <div key={`${row.num}-wo-r`} className="theory-decomp__metric-cell">
                        <MetricCell metric={row.withoutDecomp.result} />
                      </div>
                    ))}
                  </div>
                  <div className="theory-decomp__metric-col">
                    <div className="theory-decomp__subhead">
                      <p>Урон</p>
                    </div>
                    {DECOMP_LEVEL_ROWS.map((row) => (
                      <div key={`${row.num}-wo-d`} className="theory-decomp__metric-cell">
                        <MetricCell metric={row.withoutDecomp.damage} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="theory-decomp__col-group theory-decomp__col-group--measures">
                <div className="theory-decomp__col-group-head">
                  <p>Принимаемые меры</p>
                </div>
                <div className="theory-decomp__col-group-body">
                  <div className="theory-decomp__metric-col">
                    <div className="theory-decomp__subhead">
                      <p>Необходимый уровень (модификатор)</p>
                    </div>
                    {DECOMP_LEVEL_ROWS.map((row) => (
                      <div key={`${row.num}-m`} className="theory-decomp__metric-cell theory-decomp__metric-cell--text">
                        <TextCell value={row.measures.modifier} />
                      </div>
                    ))}
                  </div>
                  <div className="theory-decomp__metric-col">
                    <div className="theory-decomp__subhead">
                      <p>Частота декомпозиции и контроля</p>
                    </div>
                    {DECOMP_LEVEL_ROWS.map((row) => (
                      <div key={`${row.num}-f`} className="theory-decomp__metric-cell theory-decomp__metric-cell--text">
                        <TextCell value={row.measures.frequency} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="theory-decomp__col-group">
                <div className="theory-decomp__col-group-head">
                  <p>С декомпозицией</p>
                </div>
                <div className="theory-decomp__col-group-body">
                  <div className="theory-decomp__metric-col">
                    <div className="theory-decomp__subhead">
                      <p>Результат</p>
                    </div>
                    {DECOMP_LEVEL_ROWS.map((row) => (
                      <div key={`${row.num}-w-r`} className="theory-decomp__metric-cell">
                        <MetricCell metric={row.withDecomp.result} />
                      </div>
                    ))}
                  </div>
                  <div className="theory-decomp__metric-col">
                    <div className="theory-decomp__subhead">
                      <p>Урон</p>
                    </div>
                    {DECOMP_LEVEL_ROWS.map((row) => (
                      <div key={`${row.num}-w-d`} className="theory-decomp__metric-cell">
                        <MetricCell metric={row.withDecomp.damage} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
