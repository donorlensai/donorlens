import type { CorrelationContext } from "./correlation.js";

export type EventEnvelope<TPayload extends Record<string, unknown>> = {
  eventId: string;
  eventName: string;
  eventVersion: number;
  occurredAt: string;
  producer: string;
  idempotencyKey: string;
  correlation: CorrelationContext;
  payload: TPayload;
};
