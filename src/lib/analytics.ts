import posthog from "posthog-js";

export function journeyEvent(name: string, properties?: Record<string, string>) {
  if (!process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN || !process.env.NEXT_PUBLIC_POSTHOG_HOST) return;

  posthog.capture(name, {
    ...properties,
    replay_url: posthog.get_session_replay_url({ withTimestamp: true, timestampLookBack: 5 }),
  });
}
