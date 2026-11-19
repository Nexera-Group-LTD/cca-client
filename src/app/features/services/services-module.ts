import { ServicesPage } from './pages/services-page/services-page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing-module';
import { ServiceDetails } from './pages/service-details/service-details';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [ServicesPage, ServiceDetails],
  imports: [CommonModule, ServicesRoutingModule, SharedModule],
})
export class ServicesModule {}
