import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 70,
    damping: 18,
  });

  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest).toLocaleString(),
  );

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  return (
    <motion.article
      className="kpi-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <p>{label}</p>
      <strong>
        {prefix}
        <motion.span>{displayValue}</motion.span>
        {suffix}
      </strong>
    </motion.article>
  );
}