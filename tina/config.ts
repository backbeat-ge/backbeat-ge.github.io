import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get these from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
    host: true,
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Post date",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "event",
        label: "Events",
        path: "src/content/events",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
            ui: {
              utc: true,
            },
          },
          {
            type: "reference",
            collections: ["place"],
            name: "place",
            label: "Place",
            required: true,
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "image",
            name: "imageSrc",
            label: "Cover image",
            required: false,
          },
        ],
      },
      {
        name: "course",
        label: "Courses",
        path: "src/content/courses",
        fields: [
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "fromDate",
            label: "Starting date",
            required: true,
            ui: {
              utc: true,
            },
          },
          {
            type: "datetime",
            name: "toDate",
            label: "End date",
            required: true,
            ui: {
              utc: true,
            },
          },
          {
            type: "image",
            name: "bannerSrc",
            label: "Banner image",
            required: false,
          },
          {
            type: "string",
            name: "frontColor",
            label: "Front color",
            required: false,
            ui: {
              component: "color",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Description",
            isBody: true,
          },
          {
            type: "object",
            name: "placeList",
            label: "Places",
            list: true,      
            fields: [
              {
                type: 'reference',
                collections: ['place'],
                label: 'Place',
                name: 'place',
              },
            ]
          },
          {
            type: "string",
            name: "registrationUrl",
            label: "Registration URL",
            required: false,
          }          
        ],
      },
      {
        name: "workshop",
        label: "Workshops",
        path: "src/content/workshops",
        fields: [
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "fromDate",
            label: "Starting date",
            required: true,
            ui: {
              utc: true,
            },
          },
          {
            type: "datetime",
            name: "toDate",
            label: "End date",
            required: true,
            ui: {
              utc: true,
            },
          },
          {
            type: "image",
            name: "imageSrc",
            label: "Cover image",
            required: false,
          },
          {
            type: "string",
            name: "frontColor",
            label: "Front color",
            required: false,
            ui: {
              component: "color",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Description",
            isBody: true,
          },
          {
            type: "object",
            name: "placeList",
            label: "Places",
            list: true,      
            fields: [
              {
                type: 'reference',
                collections: ['place'],
                label: 'Place',
                name: 'place',
              },
            ]
          },
          {
            type: "string",
            name: "registrationUrl",
            label: "Registration URL",
            required: false,
          },
        ],
      },
      {
        name: "place",
        label: "Places",
        path: "src/content/places",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "address",
            label: "Address",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "mapLink",
            label: "Map link",
            required: false,
          },
          {
            type: "rich-text",
            name: "commentsFr",
            label: "Comments (FR)",
            required: false,
          },
          {
            type: "rich-text",
            name: "commentsEn",
            label: "Comments (EN)",
            required: false,
          },
        ],
      },
    ],
  },
});
