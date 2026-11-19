import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main } from './layouts/main/main';

const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./features/home/home-module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () => import('./features/about/about-module').then((m) => m.AboutModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./features/services/services-module').then((m) => m.ServicesModule),
      },
      {
        path: 'team',
        loadChildren: () => import('./features/team/team-module').then((m) => m.TeamModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./features/contact/contact-module').then((m) => m.ContactModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
