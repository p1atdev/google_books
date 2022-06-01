export type VolumesRequestParams = {
  q: string;

  download?: "epub";

  filter?:
    | "ebooks"
    | "free-ebooks"
    | "paid-ebooks"
    | "full"
    | "partial";

  printType?: "all" | "books" | "magazines";

  projection?: "full" | "lite";

  orderBy?: "relevance" | "newest";

  key?: string;
};
