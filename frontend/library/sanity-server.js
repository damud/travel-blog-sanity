import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: "skCEpFFkLt1PO4fZ7T4FfOyqmvEtl5iN0tOQbJ4Izi8bgMJsEefy0EaLGHVHNkdiVbUgKH6KQMse9FPT9WNH3FCfSn0NedQgUWgFmXRLZcDzyAtb9bU0dHjPbZzludwnccF2OjkHEZOKVKmSADH2cXnPgSIc1Wbv0naTn97FeANviRmFWl4N"
})

export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient;