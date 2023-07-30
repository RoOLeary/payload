import { buildConfig } from 'payload/config';
import path from 'path';
import Categories from './collections/Categories';
import Pages from './collections/Pages';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Tests from './collections/Tests';
import Users from './collections/Users';
import Media from './collections/Media';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [Categories, Posts, Pages, Tags, Tests,  Users, Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
