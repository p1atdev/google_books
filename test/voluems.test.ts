import { createVolumesRequest } from "../utils/mod.ts";
import { assertEquals } from "../deps.ts";

Deno.test("fetch /volumes", async () => {
  const res = await createVolumesRequest({ q: "タコピー" });

  assertEquals(res.items.length, 10);
});
