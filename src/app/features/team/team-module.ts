import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing-module';
import { TeamPage } from './pages/team-page/team-page';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [TeamPage],
  imports: [CommonModule, TeamRoutingModule, SharedModule],
})
export class TeamModule {}
