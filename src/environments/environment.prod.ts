import type { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  name: 'prod',

  production: true,

  siteUrl: 'https://cca.rw',

  indexable: true,

  apiBaseUrl: 'https://api.cca.rw/api/v1',
} as const satisfies AppEnvironment;
