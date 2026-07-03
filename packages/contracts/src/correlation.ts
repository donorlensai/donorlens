export type CorrelationContext = {
  correlationId: string;
  causationId?: string;
  requestId?: string;
};
