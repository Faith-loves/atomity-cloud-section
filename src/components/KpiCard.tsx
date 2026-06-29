import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

type KpiCardProps = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
};

export function KpiCard({
  label,
  value,
  prefix = "",
  suffix = "",
  delay = 0,
}: KpiCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 20,
  });

  const displayValue = useTransform(
    shouldReduceMotion ? motionValue : springValue,
    (latest) => Math.round(latest).toLocaleString(),
  );

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  return (
    <motion.article
      className="kpi-card"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.42, delay, ease: "easeOut" }}
    >
      <p>{label}</p>
      <strong aria-label={`${label}: ${prefix}${value.toLocaleString()}${suffix}`}>
        {prefix}
        <motion.span>{displayValue}</motion.span>
        {suffix}
      </strong>
    </motion.article>
  );
}
