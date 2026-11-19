import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'CCA | Strategic Communication & Reputation Advisory',
    data: {
      seo: {
        title: 'CCA | Strategic Communication & Reputation Advisory',
        description:
          'CCA is a Rwanda-focused strategic communication advisory firm helping institutions build clarity, credibility and trust.',
        keywords: 'strategic communication, reputation management, media relations, Rwanda',
        url: '/',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
