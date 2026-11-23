import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns the API key when authorization is valid", () => {
    expect(getAPIKey({ authorization: "ApiKey my-secret-key" })).toBe(
      "my-secret-key",
    );
  });

  test("returns null when authorization is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization type is wrong", () => {
    expect(getAPIKey({ authorization: "Bearer my-secret-key" })).toBeNull();
  });

  test("returns null when the API key is missing", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });
});
