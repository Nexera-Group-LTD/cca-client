import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  const events = new Subject();
  const router = {
    events,
    routerState: {
      snapshot: {
        root: {
          data: {
            seo: {
              title: 'Services | Corporate Communication Advisory',
              description: 'Explore CCA strategic communication services.',
              url: '/services',
            },
          },
          firstChild: null,
        },
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SeoService,
        Meta,
        Title,
        { provide: Router, useValue: router },
        { provide: DOCUMENT, useValue: document },
      ],
    });
  });

  afterEach(() => {
    document.head.querySelectorAll("link[rel='canonical'], link[hreflang], meta[property^='og:'], meta[name^='twitter:'], meta[name='description'], meta[name='robots'], meta[name='googlebot'], meta[name='keywords'], script#cca-structured-data").forEach((element) => element.remove());
    TestBed.resetTestingModule();
  });

  it('sets canonical, social, and structured metadata', () => {
    TestBed.inject(SeoService).initialize();

    expect(document.title).toBe('Services | Corporate Communication Advisory');
    expect(document.head.querySelector("link[rel='canonical']")?.getAttribute('href')).toBe(
      new URL('/services', `${environment.siteUrl}/`).toString(),
    );
    expect(document.head.querySelector("meta[property='og:image']")?.getAttribute('content')).toBe(
      new URL('/brand/brand-blue-bg.jpeg', `${environment.siteUrl}/`).toString(),
    );
    expect(document.head.querySelector("meta[name='twitter:card']")?.getAttribute('content')).toBe('summary_large_image');
    expect(document.getElementById('cca-structured-data')?.textContent).toContain('Corporate Communication Advisory');
  });

  it('updates canonical metadata for a service detail page', () => {
    const seo = TestBed.inject(SeoService);

    seo.update({
      title: 'Crisis Communication & Reputation Management | CCA',
      description: 'Preparedness, response planning and reputation risk advisory.',
      keywords: 'crisis communication, reputation management, Rwanda',
      url: '/services/crisis-communication-reputation-management',
    });

    expect(document.title).toBe('Crisis Communication & Reputation Management | CCA');
    expect(document.head.querySelector("link[rel='canonical']")?.getAttribute('href')).toBe(
      new URL('/services/crisis-communication-reputation-management', `${environment.siteUrl}/`).toString(),
    );
  });
});
