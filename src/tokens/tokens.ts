export const tokens = {
  colors: {
    bgPrimary: "var(--color-bg-primary)",
    bgSecondary: "var(--color-bg-secondary)",
    surface: "var(--color-surface)",
    surfaceMuted: "var(--color-surface-muted)",
    textPrimary: "var(--color-text-primary)",
    textSecondary: "var(--color-text-secondary)",
    border: "var(--color-border)",
    accentPrimary: "var(--color-accent-primary)",
    accentSuccess: "var(--color-accent-success)",
    accentWarning: "var(--color-accent-warning)",
  },
  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
  },
  spacing: {
    section: "var(--space-section)",
    container: "var(--space-container)",
  },
} as const;