import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TeamRole {
  readonly number: string;
  readonly title: string;
  readonly focus: string;
  readonly icon: string;
  readonly image?: string;
  readonly name?: string;
  readonly linkedin?: string;
  readonly x?: string;
  readonly instagram?: string;
}

interface TeamPrinciple {
  readonly number: string;
  readonly title: string;
  readonly detail: string;
}

@Component({
  selector: 'app-team-page',
  standalone: false,
  templateUrl: './team-page.html',
  styleUrl: './team-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamPage {
  readonly defaultTeamImage = '/images/team.jpeg';

  /** Positions from CCA's profile; not verified individual employees. */
  readonly roles: readonly TeamRole[] = [
    {
      number: '01',
      title: 'CEO / Lead Consultant',
      focus: 'Strategic communication leadership and advisory direction.',
      icon: 'fa-solid fa-compass',
    },
    {
      number: '02',
      title: 'Associate Communication Expert',
      focus: 'Communication planning, stakeholder engagement and advisory support.',
      icon: 'fa-solid fa-comments',
    },
    {
      number: '03',
      title: 'Media & Digital',
      focus: 'Media engagement and digital communication support (part-time role).',
      icon: 'fa-solid fa-bullhorn',
    },
  ];

  readonly principles: readonly TeamPrinciple[] = [
    {
      number: '01',
      title: 'Strategic insight',
      detail: 'Understanding communication objectives and the audiences that matter.',
    },
    {
      number: '02',
      title: 'Local perspective',
      detail: 'Working with awareness of Rwanda’s institutional and public-sector context.',
    },
    {
      number: '03',
      title: 'Professional standards',
      detail: 'Prioritizing clarity, ethical communication and credibility.',
    },
  ];
}
