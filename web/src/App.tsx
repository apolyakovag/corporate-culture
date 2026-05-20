import { useCallback, useEffect, useState } from "react";
import { BasicConceptsPage } from "./BasicConceptsPage";
import { HomePage } from "./HomePage";
import { MissionValuesPage } from "./MissionValuesPage";
import { CompetenciesPage } from "./CompetenciesPage";
import { FaithPage } from "./FaithPage";
import { ZkaPage } from "./ZkaPage";
import { ZkoPage } from "./ZkoPage";
import { DecompositionPage } from "./DecompositionPage";
import { StrivingPage } from "./StrivingPage";
import { StrategyPage } from "./StrategyPage";
import {
  parseTheorySectionFromHash,
  theoryHashForSection,
  type TheorySectionId,
} from "./theoryMenu";

type AppPage = "home" | TheorySectionId;

function readPageFromHash(): AppPage {
  return parseTheorySectionFromHash(window.location.hash) ?? "home";
}

export default function App() {
  const [page, setPage] = useState<AppPage>(readPageFromHash);

  useEffect(() => {
    const onHashChange = () => setPage(readPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const goHome = useCallback(() => {
    window.location.hash = "";
    setPage("home");
  }, []);

  const goToSection = useCallback((section: TheorySectionId) => {
    const nextHash = theoryHashForSection(section);
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    setPage(section);
  }, []);

  if (page === "concepts") {
    return <BasicConceptsPage onBack={goHome} onNavigate={goToSection} />;
  }

  if (page === "mission") {
    return <MissionValuesPage onBack={goHome} onNavigate={goToSection} />;
  }

  if (page === "strategy") {
    return <StrategyPage onBack={goHome} onNavigate={goToSection} />;
  }

  if (page === "competencies") {
    return <CompetenciesPage onBack={goHome} onNavigate={goToSection} />;
  }

  if (page === "striving") {
    return <StrivingPage onBack={goHome} onNavigate={goToSection} />;
  }

  if (page === "faith") {
    return <FaithPage onBack={goHome} onNavigate={goToSection} />;
  }

  if (page === "zka") {
    return <ZkaPage onBack={goHome} onNavigate={goToSection} />;
  }

  if (page === "zko") {
    return <ZkoPage onBack={goHome} onNavigate={goToSection} />;
  }

  if (page === "decomposition") {
    return <DecompositionPage onBack={goHome} onNavigate={goToSection} />;
  }

  return (
    <HomePage
      onGoToConcepts={() => goToSection("concepts")}
      onGoToMission={() => goToSection("mission")}
      onGoToStrategy={() => goToSection("strategy")}
      onGoToCompetencies={() => goToSection("competencies")}
    />
  );
}
