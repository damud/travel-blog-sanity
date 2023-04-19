import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: "skQ7TGoKy7YdOieFcS9Wb4dchBh1xjjPqO7gJAMBHUZAYOnBzXjjBjJIyBZAw3GZjRqWConyQQZymUe2WAGHxqd8hWFsHq0Qjq3w7BHAEZCyqjilQJbz7M4dX9HxwrNdakecoUjbU9Alxg6pN15FAKUc2LPZDYbjFT8fjbvEvu5YWDWm29mT"
})

export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient;