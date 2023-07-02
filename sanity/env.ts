export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-26';

export const dataset = assertValue(
  process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_DATASET || 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_PROJECT_ID || 'v7vpk3er',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const baseUrl = assertValue(
  isDevelopmentEnv()
    ? 'https://localhost:3000'
    : 'https://portfolio-site-debajit.sanity.studio',
  'Missing environment variable: BASE_URL_PATH'
);

export const useCdn: boolean = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

function isDevelopmentEnv(): boolean {
  return process.env.NODE_ENV === 'development';
}
