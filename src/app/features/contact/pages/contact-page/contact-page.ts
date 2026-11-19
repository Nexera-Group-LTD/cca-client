import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { finalize, Subscription } from 'rxjs';
import { ContactInquiryType, CreateContactInquiry } from '../../interfaces/contact.interface';
import { ContactService } from '../../services/contact.service';

interface InquiryOption {
  value: ContactInquiryType;
  label: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: false,
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage implements OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly cdr = inject(ChangeDetectorRef);
  readonly options: readonly InquiryOption[] = [
    { value: 'general', label: 'General inquiry' },
    { value: 'strategic-advisory', label: 'Strategic Communication Advisory' },
    { value: 'media-relations', label: 'Media Relations & Public Affairs' },
    { value: 'crisis-reputation', label: 'Crisis Communication & Reputation Management' },
    { value: 'digital-executive', label: 'Digital & Executive Communication' },
    { value: 'event-management', label: 'Strategic Event Management & Communication' },
    { value: 'photography', label: 'Photography & Visual Communication' },
    { value: 'training', label: 'Capacity Building & Training' },
  ];

  readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    organization: ['', [Validators.required, Validators.maxLength(160)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
    phone: ['', [Validators.maxLength(40)]],
    inquiryType: ['general' as ContactInquiryType, [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(3000)]],
    website: [''],
  });

  submitting = false;
  submitted = false;
  errorMessage = '';
  private request?: Subscription;

  hasError(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  submit(): void {
    if (this.submitting) return;
    this.errorMessage = '';
    this.submitted = false;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    if (value.website.trim()) return; // Bot trap.

    const payload: CreateContactInquiry = {
      fullName: value.fullName.trim(),
      organization: value.organization.trim(),
      email: value.email.trim(),
      inquiryType: value.inquiryType,
      message: value.message.trim(),
      ...(value.phone.trim() ? { phone: value.phone.trim() } : {}),
    };

    this.submitting = true;
    this.request = this.contactService
      .submitInquiry(payload)
      .pipe(
        finalize(() => {
          this.submitting = false;
          this.cdr.markForCheck();
        }),
      )
      .subscribe({
        next: () => {
          this.submitted = true;
          this.form.reset({ inquiryType: 'general' });
          this.cdr.markForCheck();
        },
        error: () => {
          this.errorMessage = 'Your message could not be sent. Please try again later.';
          this.cdr.markForCheck();
        },
      });
  }

  ngOnDestroy(): void {
    this.request?.unsubscribe();
  }
}
