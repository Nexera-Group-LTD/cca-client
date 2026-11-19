import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-services-page',
  standalone: false,
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPage {
  private readonly servicesService = inject(ServicesService);
  readonly services = this.servicesService.services;
}
