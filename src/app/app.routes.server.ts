import { RenderMode, ServerRoute } from '@angular/ssr';
import { CCA_SERVICES } from './features/services/data/services.data';

export async function getServicePrerenderParams(): Promise<{ slug: string }[]> {
  return CCA_SERVICES.map(({ slug }) => ({ slug }));
}

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getServicePrerenderParams,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
