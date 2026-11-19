import { CCA_SERVICES } from './features/services/data/services.data';
import { getServicePrerenderParams } from './app.routes.server';

describe('server routes', () => {
  it('prerenders every published service detail page', async () => {
    await expect(getServicePrerenderParams()).resolves.toEqual(
      CCA_SERVICES.map(({ slug }) => ({ slug })),
    );
  });
});
