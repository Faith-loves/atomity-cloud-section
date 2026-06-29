import { useEffect, useState } from "react";
import { FeatureSection } from "./components/FeatureSection";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <>
      <ThemeToggle
        isDark={isDark}
        onToggle={() => setIsDark((current) => !current)}
      />
      <FeatureSection />
    </>
  );
}

export default App;