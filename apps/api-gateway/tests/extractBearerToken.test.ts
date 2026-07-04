import test from "node:test";
import assert from "node:assert/strict";
import { extractBearerToken } from "../src/auth/extractBearerToken.ts";

test("extracts bearer token from authorization header", () => {
  assert.equal(extractBearerToken("Bearer abc.def.ghi"), "abc.def.ghi");
});

test("returns null when authorization header is missing", () => {
  assert.equal(extractBearerToken(undefined), null);
});

test("returns null for non-bearer authorization", () => {
  assert.equal(extractBearerToken("Basic abc"), null);
});
