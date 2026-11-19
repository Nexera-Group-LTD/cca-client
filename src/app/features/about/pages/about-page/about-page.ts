import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ValueItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

interface ApproachStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-about-page',
  standalone: false,
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  readonly objectives: readonly ValueItem[] = [
    {
      number: '01',
      title: 'Strategic advisory',
      description:
        'Provide strategic communication advisory services to institutions and corporates.',
      icon: 'fa-solid fa-compass',
    },
    {
      number: '02',
      title: 'Public confidence',
      description: 'Strengthen clients’ public image and stakeholder relationships.',
      icon: 'fa-solid fa-handshake',
    },
    {
      number: '03',
      title: 'Crisis readiness',
      description: 'Support organizations during crises and sensitive communication moments.',
      icon: 'fa-solid fa-shield-halved',
    },
    {
      number: '04',
      title: 'Professional capacity',
      description: 'Build professional communication capacity within institutions.',
      icon: 'fa-solid fa-people-group',
    },
  ];

  readonly strengths: readonly string[] = [
    'Strong understanding of government and public-sector communication',
    'Practical media and crisis communication experience',
    'Local context knowledge paired with professional standards',
    'An advisory-based approach that goes beyond publicity and content posting',
  ];

  readonly approach: readonly ApproachStep[] = [
    {
      number: '01',
      title: 'Understand the context',
      description:
        'We begin with an organization’s objectives, stakeholders and communication challenges.',
    },
    {
      number: '02',
      title: 'Shape the strategy',
      description:
        'We develop focused messages and advisory solutions suited to the institution and its audience.',
    },
    {
      number: '03',
      title: 'Support delivery',
      description:
        'We help translate communication plans into practical media, reputation and engagement activities.',
    },
    {
      number: '04',
      title: 'Build lasting trust',
      description:
        'Our focus is credible communication, stakeholder confidence and long-term institutional relationships.',
    },
  ];
}
