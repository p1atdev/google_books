import { VolumesRequestParams, VolumesResponse } from "../../types/mod.ts";

const endpoint = "https://www.googleapis.com/books/v1/volumes";

export const createVolumesRequest = async (
  params: VolumesRequestParams,
): Promise<VolumesResponse> => {
  const url = new URL(endpoint);

  url.searchParams.append("q", params.q);

  const res: VolumesResponse = await fetch(url.toString()).then((res) =>
    res.json()
  );

  return res;
};
