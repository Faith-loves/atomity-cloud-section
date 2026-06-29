import { motion } from "framer-motion";

type ProviderCardProps = {
  name: string;
  status: "Connected" | "Syncing";
  resources: number;
  delay?: number;
};

export function ProviderCard({
  name,
  status,
  resources,
  delay = 0,
}: ProviderCardProps) {
  return (
    <motion.article
      className="provider-card"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
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