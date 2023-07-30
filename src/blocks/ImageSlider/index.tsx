import type { Block } from 'payload/types';

export const ImageSlider: Block = {
  fields: [
    // required
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
          name: "textSub",
          type: "text",
        },
        {
          name: "textHeading",
          type: "text",
        },
        {
          name: "textContent",
          type: "textarea",
        },
        {
          name: "textBackground",
          type: "text",
        },
        {
          name: "slideImage",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "slideColor",
          type: 'select', // required
          hasMany: true,
          admin: {
            isClearable: true,
            isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
          },
          options: [
            {
              label: 'Blue',
              value: 'blue',
            },
            {
              label: 'Red',
              value: 'red',
            },
            {
              label: 'Yellow',
              value: 'yellow',
            },
            {
              label: 'Gray',
              value: 'gray',
            },
            {
              label: 'Dark Gray',
              value: 'dark-gray',
            }
          ],
        },
        {
          name: "caption",
          type: "text",
        },
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }:any) => {
            return data?.title || `Slide ${String(index).padStart(2, "0")}`;
          },
        },
      },
    },
  ],
  slug: 'imageSlider', // required
  imageURL: 'https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2',
  imageAltText: 'A component to render an image slider',
  interfaceName: 'imageSlider', // optional
}
