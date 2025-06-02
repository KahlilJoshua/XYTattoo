//SANITYYYY
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "lhm5eiys",
  dataset: "production", // Or whatever dataset you chose (default is 'production')
  apiVersion: "2023-05-03", // Use a date for production deployments (e.g., '2023-05-03')
  useCdn: true, // Set to true for production, false for development (if data is not updated often)
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
