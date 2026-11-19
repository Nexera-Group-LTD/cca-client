import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDetails } from './pages/service-details/service-details';
import { ServicesPage } from './pages/services-page/services-page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ServicesPage,
    title: 'Services | CCA',
    data: {
      seo: {
        title: 'Services | Corporate Communication Advisory',
        description:
          'Explore CCA services in strategic communication, media relations, crisis management, events, visual communication and training.',
        keywords: 'communication services, media relations, crisis communication, Rwanda',
        url: '/services',
      },
    },
  },
  {
    path: ':slug',
    component: ServiceDetails,
    data: {
      seo: {
        title: 'Services | Corporate Communication Advisory',
        description: 'Explore CCA strategic communication advisory services.',
        keywords: 'communication advisory, CCA, Rwanda',
        url: '/services',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
