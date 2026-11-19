import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { SeoService } from '../../../../core/services/seo.service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-details',
  standalone: false,
  templateUrl: './service-details.html',
  styleUrl: './service-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly servicesService = inject(ServicesService);
  private readonly seo = inject(SeoService);

  readonly services = this.servicesService.services;
  readonly service$ = this.route.paramMap.pipe(
    map((params) => this.servicesService.findBySlug(params.get('slug'))),
    tap((service) => {
      this.seo.update({
        title: service ? `${service.title} | CCA` : 'Service Not Found | CCA',
        description: service?.summary ?? 'Explore CCA strategic communication advisory services.',
        keywords: service?.keywords.join(', ') ?? 'communication advisory, CCA, Rwanda',
        url: service ? `/services/${service.slug}` : '/services',
      });
    }),
  );
}
