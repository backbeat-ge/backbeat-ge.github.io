// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    published: z.boolean(),
  }),
});
const eventCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    place: z.string(),
    date: z.date(),
    published: z.boolean(),
    imageSrc: z.string().optional(),
  }),
});
const courseCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    fromDate: z.date(),
    toDate: z.date(),
    place: z.string(),
    registrationUrl: z.string().url().optional(),
    bannerSrc: z.string().optional(),
    frontColor: z.string().optional(),
    published: z.boolean(),
  }),
});
const placeCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    address: z.string(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  events: eventCollection,
  courses: courseCollection,
  places: placeCollection,
};
