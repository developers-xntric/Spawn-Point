
import { createClient } from "@sanity/client";


export const client = createClient({
  projectId: "u98a2a3q",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  // token: process.env.SANITY_TOKEN,
});


