import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamPage } from './pages/team-page/team-page';

const routes: Routes = [
  {
    path: '',
    component: TeamPage,
    title: 'Our Team | Corporate Communication Advisory',
    data: {
      seo: {
        title: 'Our Team | Corporate Communication Advisory',
        description:
          'Meet the advisory-led CCA team supporting strategic communication, media engagement and digital communication.',
        keywords: 'CCA team, communication consultants, Rwanda',
        url: '/team',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
