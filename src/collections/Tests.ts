import { CollectionConfig } from "payload/dist/collections/config/types";
import formatSlug from "../utilities/formatSlug";

const Tests: CollectionConfig = {
    slug: 'tests',
    admin: {
      useAsTitle: 'name',
    },
    access: {
      read: () => true,
    },
    fields: [
      {
        name: 'name',
        type: 'text',
      },
      {
        name: "slider", // required
        type: "array", // required
        label: "Image Slider",
        minRows: 2,
        maxRows: 10,
        interfaceName: "CardSlider", // optional
        labels: {
          singular: "Slide",
          plural: "Slides",
        },
        fields: [
          // required
          {
            name: "title",
            type: "text",
          },
          {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
          },
          {
            name: "caption",
            type: "text",
          },
        ],
        admin: {
          components: {
            RowLabel: ({ data, index }) => {
              return data?.title || `Slide ${String(index).padStart(2, "0")}`;
            },
          },
        },
      },
      {
        name: 'slug',
        label: 'Slug',
        type: 'text',
        admin: {
          position: 'sidebar',
        },
        hooks: {
          beforeValidate: [
            formatSlug('name'),
          ],
        },
      },

    ],
    timestamps: true
}

export default Tests; 