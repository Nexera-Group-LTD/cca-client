import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';

const routes: Routes = [
  {
    path: '',
    component: AboutPage,
    title: 'About CCA | Corporate Communication Advisory',
    data: {
      seo: {
        title: 'About CCA | Corporate Communication Advisory',
        description:
          'Learn how CCA helps institutions build credible communication, strong reputations and lasting stakeholder trust.',
        keywords: 'CCA, communication advisory, Rwanda, institutional reputation',
        url: '/about',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
