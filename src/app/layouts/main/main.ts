import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

interface NavigationItem {
  readonly label: string;
  readonly path: string;
  readonly exact?: boolean;
}

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main implements OnInit, OnDestroy {
  @ViewChild('menuToggle') private menuToggle?: ElementRef<HTMLButtonElement>;
  @ViewChild('mobileNavigation') private mobileNavigation?: ElementRef<HTMLElement>;

  readonly logo = '/brand/logo-dark.png';
  readonly companyName = 'Corporate Communication Advisory';
  readonly year = new Date().getFullYear();
  readonly navigation: readonly NavigationItem[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Who We Serve', path: '/sectors' },
    { label: 'Our Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
  ];

  menuOpen = false;
  private navigationSubscription?: Subscription;

  constructor(
    private readonly router: Router,
    private readonly changeDetector: ChangeDetectorRef,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngOnInit(): void {
    this.navigationSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  ngOnDestroy(): void {
    this.navigationSubscription?.unsubscribe();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.changeDetector.markForCheck();
  }

  closeMenu(restoreFocus = false): void {
    if (!this.menuOpen) return;
    this.menuOpen = false;
    this.changeDetector.markForCheck();
    if (restoreFocus) this.menuToggle?.nativeElement.focus();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu(true);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target;
    const nav = this.mobileNavigation?.nativeElement;
    const toggle = this.menuToggle?.nativeElement;
    if (
      this.menuOpen &&
      target instanceof Node &&
      !nav?.contains(target) &&
      !toggle?.contains(target)
    ) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    const width = this.document.defaultView?.innerWidth;
    if (width !== undefined && width >= 1024) this.closeMenu();
  }

  onMobileNavFocusOut(event: FocusEvent): void {
    const next = event.relatedTarget;
    if (next instanceof Node && this.mobileNavigation?.nativeElement.contains(next)) return;
    if (next instanceof Node && this.menuToggle?.nativeElement.contains(next)) return;
    this.closeMenu();
  }

  scrollToTop(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
