import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "accumulate",
  apiKey: process.env.API_KEY,
});
