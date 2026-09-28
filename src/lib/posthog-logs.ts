import posthog from "posthog-js";

type DemoOutcome = "reservation_completed" | "lookup_completed" | "suggestion_completed";

export function logDemoOutcome(outcome: DemoOutcome) {
  if (!process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN || !process.env.NEXT_PUBLIC_POSTHOG_HOST) return;

  posthog.logger.info("demo flow completed", { outcome });
}
