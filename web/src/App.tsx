import { useCallback, useEffect, useState } from "react";
import { BasicConceptsPage } from "./BasicConceptsPage";
import { HomePage } from "./HomePage";

const CONCEPTS_HASH = "#/osnovnye-ponyatiya";

function readPageFromHash(): "home" | "concepts" {
  return window.location.hash === CONCEPTS_HASH ? "concepts" : "home";
}

export default function App() {
  const [page, setPage] = useState<"home" | "concepts">(readPageFromHash);

  useEffect(() => {
    const onHashChange = () => setPage(readPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const goToConcepts = useCallback(() => {
    window.location.hash = "osnovnye-ponyatiya";
    setPage("concepts");
  }, []);

  const goHome = useCallback(() => {
    window.location.hash = "";
    setPage("home");
  }, []);

  if (page === "concepts") {
    return <BasicConceptsPage onBack={goHome} />;
  }

  return <HomePage onGoToConcepts={goToConcepts} />;
}
