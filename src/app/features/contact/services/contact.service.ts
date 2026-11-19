import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactInquiryResponse, CreateContactInquiry } from '../interfaces/contact.interface';

@Injectable({ providedIn: 'root' })
export class ContactService {
  // Set this to your NestJS endpoint, or configure an API base URL in src/config.
  private readonly endpoint = '/api/contact';

  constructor(private readonly http: HttpClient) {}

  submitInquiry(payload: CreateContactInquiry): Observable<ContactInquiryResponse> {
    return this.http.post<ContactInquiryResponse>(this.endpoint, payload);
  }
}
