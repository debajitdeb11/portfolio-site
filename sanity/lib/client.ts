import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

// client.getDocument()

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source).url();
