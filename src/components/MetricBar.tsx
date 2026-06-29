import { motion } from "framer-motion";

type MetricBarProps = {
  label: string;
  value: number;
  unit: string;
  delay?: number;
};

export function MetricBar({ label, value, unit, delay = 0 }: MetricBarProps) {
  return (
    <div className="metric-bar">
      <div className="metric-bar__header">
        <span>{label}</span>
        <strong>
          {value}
          {unit}
        </strong>
      </div>

      <div className="metric-bar__track" aria-hidden="true">
        <motion.div
          className="metric-bar__fill"
          initial={{ inlineSize: "0%" }}
          whileInView={{ inlineSize: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}