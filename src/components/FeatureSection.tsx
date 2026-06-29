import { motion, useReducedMotion } from "framer-motion";
import { useCloudMetrics } from "../hooks/useCloudMetrics";
import { ProviderCard } from "./ProviderCard";
import { MetricBar } from "./MetricBar";
import { KpiCard } from "./KpiCard";
import "../styles/feature-section.css";

const entranceEase = [0.22, 1, 0.36, 1] as const;

export function FeatureSection() {
  const { data, isLoading, isError, refetch, isFetching } = useCloudMetrics();
  const shouldReduceMotion = useReducedMotion();

  if (isLoading) {
    return (
      <section className="feature-section" aria-busy="true">
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
    <section className="feature-section" aria-labelledby="feature-title">
      <div className="feature-section__content">
        <motion.div
          className="feature-section__intro"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: entranceEase }}
        >
          <span className="eyebrow">Multi-Cloud Intelligence</span>

          <h2 id="feature-title">
            Unify cloud visibility across every environment.
          </h2>

          <p>
            Bring AWS, Azure, Google Cloud and on-premise infrastructure into
            one intelligent optimization view.
          </p>

          <button
            className="insight-button"
            type="button"
            aria-busy={isFetching}
            aria-label="Refresh cloud intelligence data"
            onClick={() => void refetch()}
            disabled={isFetching}
          >
            {isFetching ? "Refreshing..." : "Refresh insights"}
          </button>
        </motion.div>

        <div className="providers-grid">
          {data.providers.map((provider, index) => (
            <ProviderCard key={provider.id} {...provider} delay={index * 0.08} />
          ))}
        </div>

        <div className="connection-layer" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <motion.div
          className="dashboard"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97, y: 16 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.28 }}
          transition={{
            duration: 0.62,
            ease: entranceEase,
          }}
        >
          <div className="dashboard__header">
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
              delay={0.05}
            />
            <KpiCard
              label="Active Resources"
              value={data.activeResources}
              delay={0.12}
            />
            <KpiCard
              label="Efficiency"
              value={data.efficiency}
              suffix="%"
              delay={0.19}
            />
          </div>

          <div className="metrics-grid">
            {data.metrics.map((metric, index) => (
              <MetricBar
                key={metric.id}
                label={metric.label}
                value={metric.value}
                unit={metric.unit}
                delay={index * 0.06}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
