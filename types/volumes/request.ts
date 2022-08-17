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

  /**
   * You can paginate the volumes list by specifying two values in the parameters for the request.
   * The position in the collection at which to start. The index of the first item is 0.
   */
  startIndex?: number;

  /**
   * You can paginate the volumes list by specifying two values in the parameters for the request.
   * The maximum number of results to return. The default is 10, and the maximum allowable value is 40.
   */
  maxResults?: number;
};
