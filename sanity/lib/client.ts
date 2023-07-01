import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

import { apiVersion, baseUrl, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  studioUrl: baseUrl,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source).url();
