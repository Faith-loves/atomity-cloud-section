import { motion } from "framer-motion";
import { useCloudMetrics } from "../hooks/useCloudMetrics";
import { ProviderCard } from "./ProviderCard";
import { MetricBar } from "./MetricBar";
import { KpiCard } from "./KpiCard";
import "../styles/feature-section.css";

export function FeatureSection() {
  const { data, isLoading, isError } = useCloudMetrics();

  if (isLoading) {
    return (
      <section className="feature-section">
        <p>Loading cloud intelligence...</p>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section className="feature-section">
        <p>Unable to load cloud metrics.</p>
      </section>
    );
  }

  return (
    <section className="feature-section">
      <div className="feature-section__content">
        <motion.div
          className="feature-section__intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">
            Multi-Cloud Intelligence
          </span>

          <h2>
            Unify cloud visibility across every environment.
          </h2>

          <p>
            Bring AWS, Azure, Google Cloud and on-premise
            infrastructure into one intelligent optimization view.
          </p>
        </motion.div>

        <div className="providers-grid">
          {data.providers.map((provider, index) => (
            <ProviderCard
              key={provider.id}
              {...provider}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="connection-layer" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <motion.div
          className="dashboard"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        ><div className="dashboard__header">
            <div>
              <span className="dashboard__label">Optimization cockpit</span>
              <h3>Live infrastructure signals</h3>
            </div>

            <span className="dashboard__pulse">Live</span>
          </div>
          <div className="kpi-grid">

            <KpiCard
              label="Estimated Savings"
              value={data.savings}
              prefix="$"
            />

            <KpiCard
              label="Active Resources"
              value={data.activeResources}
            />

            <KpiCard
              label="Efficiency"
              value={data.efficiency}
              suffix="%"
            />
          </div>

          <div className="metrics-grid">
            {data.metrics.map((metric, index) => (
              <MetricBar
                key={metric.id}
                label={metric.label}
                value={metric.value}
                unit={metric.unit}
                delay={index * 0.08}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}