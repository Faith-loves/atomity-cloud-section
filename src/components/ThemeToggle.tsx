type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" type="button" onClick={onToggle}>
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
}