import { Injectable } from '@angular/core';
import { CCA_SERVICES } from '../data/services.data';
import { CcaService } from '../interfaces/service.interface';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  readonly services: readonly CcaService[] = CCA_SERVICES;

  findBySlug(slug: string | null): CcaService | undefined {
    return this.services.find((service) => service.slug === slug);
  }
}
