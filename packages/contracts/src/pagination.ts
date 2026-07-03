export type PageRequest = {
  cursor?: string;
  limit: number;
};

export type PageResponse<TItem> = {
  items: TItem[];
  nextCursor?: string;
};
