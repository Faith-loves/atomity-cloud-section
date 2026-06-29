import { motion, useReducedMotion } from "framer-motion";

type MetricBarProps = {
  label: string;
  value: number;
  unit: string;
  delay?: number;
};

export function MetricBar({ label, value, unit, delay = 0 }: MetricBarProps) {
  const shouldReduceMotion = useReducedMotion();
  const valueText = `${value}${unit}`;

  return (
    <div className="metric-bar">
      <div className="metric-bar__header">
        <span>{label}</span>
        <strong>{valueText}</strong>
      </div>

      <div
        className="metric-bar__track"
        role="meter"
        aria-label={`${label} optimization signal`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-valuetext={valueText}
      >
        <motion.div
          className="metric-bar__fill"
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { inlineSize: "0%" }}
          whileInView={shouldReduceMotion ? undefined : { inlineSize: `${value}%` }}
          style={shouldReduceMotion ? { inlineSize: `${value}%` } : undefined}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.72, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
