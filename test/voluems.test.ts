import { createVolumesRequest, VolumesQueryBuilder } from "../mod.ts";
import { assertEquals } from "../deps.ts";

Deno.test("simple fetch /volumes", async () => {
  const res = await createVolumesRequest({ q: "intitle:タコピー" });

  assertEquals(res.items.length, 2);
});

Deno.test("fetch /volumes with query builder", async () => {
  const query = VolumesQueryBuilder({
    q: "キノの旅",
    intitle: "XX",
  });

  const res = await createVolumesRequest({
    q: query,
  });

  assertEquals(res.items[0].volumeInfo.title, "キノの旅XX　the Beautiful World");
});

Deno.test("specifying max results", async () => {
  const res = await createVolumesRequest({
    q: "inauthor:九井諒子",
    maxResults: 20,
  });

  assertEquals(res.items.length, 20);
});
