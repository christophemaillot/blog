import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: "2022-03-25",
    useCdn: false,
});
