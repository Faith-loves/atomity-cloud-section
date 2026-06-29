import { motion, useReducedMotion } from "framer-motion";

type ProviderCardProps = {
  name: string;
  status: "Connected" | "Syncing";
  resources: number;
  delay?: number;
};

const cardEase = [0.22, 1, 0.36, 1] as const;

export function ProviderCard({
  name,
  status,
  resources,
  delay = 0,
}: ProviderCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="provider-card"
      aria-label={`${name}: ${resources} resources monitored, ${status}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22, scale: 0.97 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.48, delay, ease: cardEase }}
      whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01 }}
    >
      <div className="provider-card__icon" aria-hidden="true">
        {name.slice(0, 2).toUpperCase()}
      </div>

      <div>
        <h3>{name}</h3>
        <p>{resources} resources monitored</p>
      </div>

      <span className={`provider-card__status provider-card__status--${status.toLowerCase()}`}>
        {status}
      </span>
    </motion.article>
  );
}

