import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface HeroSlide {
  readonly eyebrow: string;
  readonly lead: string;
  readonly highlight: string;
  readonly ending: string;
  readonly description: string;
  readonly visualTop: string;
  readonly visualLead: string;
  readonly visualHighlight: string;
  readonly visualBottom: string;
  readonly footnote: string;
}

interface ServicePreview {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly slug: string;
}

interface SectorPreview {
  readonly name: string;
  readonly icon: string;
}

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements AfterViewInit, OnDestroy {
  readonly heroSlides: readonly HeroSlide[] = [
    {
      eyebrow: 'Rwanda-focused communication advisory',
      lead: 'Communicate with',
      highlight: 'clarity.',
      ending: 'Lead with confidence.',
      description:
        'We help institutions communicate consistently, strengthen their public image, and build stakeholder trust.',
      visualTop: 'CCA / STRATEGY',
      visualLead: 'Trust is built',
      visualHighlight: 'through every word.',
      visualBottom: 'STRATEGY / CREDIBILITY / TRUST',
      footnote: 'Strategic communication · Stakeholder engagement',
    },
    {
      eyebrow: 'Crisis communication & reputation management',
      lead: 'Protect your',
      highlight: 'reputation.',
      ending: 'Respond with purpose.',
      description:
        'From crisis preparedness to spokesperson support, CCA provides practical advice for sensitive communication moments.',
      visualTop: 'CCA / REPUTATION',
      visualLead: 'Prepare with care.',
      visualHighlight: 'Respond with clarity.',
      visualBottom: 'PREPAREDNESS / RESPONSE / CONFIDENCE',
      footnote: 'Crisis planning · Reputation risk advisory',
    },
    {
      eyebrow: 'Media relations & public affairs',
      lead: 'Make every',
      highlight: 'message count.',
      ending: 'Engage with confidence.',
      description:
        'We support media engagement, institutional statements, executive messaging, and public affairs communication.',
      visualTop: 'CCA / MEDIA',
      visualLead: 'The right message.',
      visualHighlight: 'The right audience.',
      visualBottom: 'MEDIA / PUBLIC AFFAIRS / MESSAGING',
      footnote: 'Media engagement · Executive communication',
    },
    {
      eyebrow: 'Strategic events & capacity building',
      lead: 'Create meaningful',
      highlight: 'connections.',
      ending: 'Build lasting impact.',
      description:
        'CCA supports institutional events, professional communication training, and practical spokesperson development.',
      visualTop: 'CCA / ENGAGEMENT',
      visualLead: 'Bring people together.',
      visualHighlight: 'Build lasting trust.',
      visualBottom: 'EVENTS / TRAINING / STAKEHOLDERS',
      footnote: 'Institutional events · Communication training',
    },
  ];

  readonly slideDurationMs = 5000;
  activeSlideIndex = 0;
  autoplayPaused = false;

  private carouselTimer?: ReturnType<typeof setInterval>;
  private readonly browser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.browser = isPlatformBrowser(platformId);
  }

  get activeSlide(): HeroSlide {
    return this.heroSlides[this.activeSlideIndex];
  }

  ngAfterViewInit(): void {
    if (!this.browser) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.autoplayPaused = true;
      this.cdr.markForCheck();
      return;
    }
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  goToSlide(index: number): void {
    const length = this.heroSlides.length;
    this.activeSlideIndex = ((index % length) + length) % length;
    this.restartAutoplay();
    this.cdr.markForCheck();
  }

  nextSlide(): void {
    this.goToSlide(this.activeSlideIndex + 1);
  }

  previousSlide(): void {
    this.goToSlide(this.activeSlideIndex - 1);
  }

  toggleAutoplay(): void {
    this.autoplayPaused = !this.autoplayPaused;
    if (this.autoplayPaused) this.stopAutoplay();
    else this.startAutoplay();
    this.cdr.markForCheck();
  }

  private startAutoplay(): void {
    if (!this.browser || this.autoplayPaused) return;
    this.stopAutoplay();
    this.carouselTimer = setInterval(() => {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.heroSlides.length;
      this.cdr.markForCheck();
    }, this.slideDurationMs);
  }

  private stopAutoplay(): void {
    if (this.carouselTimer !== undefined) {
      clearInterval(this.carouselTimer);
      this.carouselTimer = undefined;
    }
  }

  private restartAutoplay(): void {
    if (!this.autoplayPaused) this.startAutoplay();
  }

  readonly services: readonly ServicePreview[] = [
    {
      number: '01',
      title: 'Strategic Communication Advisory',
      description: 'Institutional strategies, stakeholder engagement, and clear messaging.',
      icon: 'fa-solid fa-comments',
      slug: 'strategic-communication-advisory',
    },
    {
      number: '02',
      title: 'Media Relations & Public Affairs',
      description: 'Media engagement, press communications, and public affairs advisory.',
      icon: 'fa-solid fa-microphone-lines',
      slug: 'media-relations-events-management',
    },
    {
      number: '03',
      title: 'Crisis & Reputation Management',
      description: 'Preparedness, crisis response, and reputation risk guidance.',
      icon: 'fa-solid fa-shield-halved',
      slug: 'crisis-communication-reputation-management',
    },
    {
      number: '04',
      title: 'Digital & Executive Communication',
      description: 'Executive messaging, speechwriting, and digital content strategy.',
      icon: 'fa-solid fa-pen-nib',
      slug: 'digital-executive-communication',
    },
    {
      number: '05',
      title: 'Strategic Event Management',
      description: 'Conferences, institutional forums, protocol, and event communications.',
      icon: 'fa-regular fa-calendar-check',
      slug: 'strategic-event-management',
    },
    {
      number: '06',
      title: 'Photography & Visual Communication',
      description: 'Corporate photography, executive portraits, and visual documentation.',
      icon: 'fa-solid fa-camera',
      slug: 'photography-visual-communication',
    },
    {
      number: '07',
      title: 'Capacity Building & Training',
      description: 'Spokesperson development, media workshops, and crisis simulations.',
      icon: 'fa-solid fa-chalkboard-user',
      slug: 'capacity-building-training',
    },
  ];

  readonly sectors: readonly SectorPreview[] = [
    { name: 'Government institutions & agencies', icon: 'fa-solid fa-landmark' },
    { name: 'Corporations & private businesses', icon: 'fa-regular fa-building' },
    { name: 'NGOs & development partners', icon: 'fa-solid fa-handshake-angle' },
    { name: 'Institutional projects & programs', icon: 'fa-solid fa-diagram-project' },
  ];
}
