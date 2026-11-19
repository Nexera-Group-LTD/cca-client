import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPage } from './pages/contact-page/contact-page';

const routes: Routes = [
  {
    path: '',
    component: ContactPage,
    title: 'Contact Us | Corporate Communication Advisory',
    data: {
      seo: {
        title: 'Contact CCA | Corporate Communication Advisory',
        description:
          'Contact CCA to discuss strategic communication, reputation, media relations, events or communication training.',
        keywords: 'contact CCA, communication advisory Rwanda',
        url: '/contact',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
