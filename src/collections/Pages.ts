import type { Block, CollectionConfig } from 'payload/types'
import formatSlug from '../utilities/formatSlug';

import { CockBlock } from '../blocks/CockBlock';
import { BlockHead } from '../blocks/BlockHead';
import { ImageSlider } from '../blocks/ImageSlider';

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
      useAsTitle: 'title',
      defaultColumns: ['title', 'createdAt', 'updatedAt']
    },
    access: {
      read: () => true
    },
    versions: {
        drafts: true,
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
              {
                label: 'Hero',
                fields: [
                    {
                      name: 'title',
                      label: 'Page Title',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'headline',
                      type: 'text',
                      admin: {
                          description: 'Add a headline the BUSY and PIXELS bits are hardcoded.'
                        }
                      },
                    {
                      name: 'subtitle',
                      type: 'text'
                    }
                ],
              },
              {
                label: 'Page Layout',
                fields: [
                  {
                    name: 'layout',
                    label: 'Layout',
                    type: 'blocks',
                      minRows: 0,
                      blocks: [
                        CockBlock,
                        BlockHead,
                        ImageSlider
                      ],
                  },
                ]
            },
            {
                label: 'Meta',
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'text',
                    },
                    {
                        name: 'description',
                        label: 'Description',
                        type: 'textarea',
                    },
                    {
                        name: 'keywords',
                        label: 'Keywords',
                        type: 'text',
                    },
                    {
                      name: 'image',
                      label: 'Featured Image',
                      type: 'upload',
                      relationTo: 'media',
                    }
                ]
            }    
        ]    
        },
        {
          name: 'slug',
          label: 'Page Slug',
          type: 'text',
          admin: {
            position: 'sidebar',
          },
          hooks: {
            beforeValidate: [
              formatSlug('title'),
            ],
          },
        },
      ],
  }

  export default Pages;