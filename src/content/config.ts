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
    published: z.boolean(),
    title: z.string(),
    fromDate: z.date(),
    toDate: z.date(),
    bannerSrc: z.string().optional(),
    frontColor: z.string().optional(),
    placeList: z.array(
      z.object({
        place: z.string()
      })
    ).optional(),
    registrationUrl: z.string().url().optional(),
  }),
});
const workshopCollection = defineCollection({
  type: "content",
  schema: z.object({
    published: z.boolean(),
    title: z.string(),
    fromDate: z.date(),
    toDate: z.date(),
    frontColor: z.string().optional(),
    imageSrc: z.string().optional(),
    placeList: z.array(
      z.object({
        place: z.string()
      })
    ).optional(),
    registrationUrl: z.string().url().optional(),
  }), 
});
const placeCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    address: z.string(),
    mapLink: z.string().optional(),
    comments: z.string().optional(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  events: eventCollection,
  courses: courseCollection,
  workshops: workshopCollection,
  places: placeCollection,
};
