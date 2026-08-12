import {
  createClient as baseCreateClient,
  type ClientConfig,
} from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

export const repositoryName = process.env.PRISMIC_REPOSITORY_NAME!;

export function createClient(config: ClientConfig = {}) {
  const client = baseCreateClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions: {
      next: { tags: ["prismic"] },
      cache: "force-cache",
    },
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
}
