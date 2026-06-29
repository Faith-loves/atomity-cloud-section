type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={onToggle}
    >
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
}