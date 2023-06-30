export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-26';

export const dataset = assertValue(
  // process.env.NEXT_PUBLIC_SANITY_DATASET,
  'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  // process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'v7vpk3er',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const useCdn: boolean = isDevelopmentEnv() ? false : true;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

function isDevelopmentEnv(): boolean {
  return process.env.NODE_ENV === 'development';
}
