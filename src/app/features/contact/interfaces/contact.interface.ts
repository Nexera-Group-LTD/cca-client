export type ContactInquiryType = 'strategic-advisory' | 'media-relations' | 'crisis-reputation' | 'digital-executive' | 'event-management' | 'photography' | 'training' | 'general';

export interface CreateContactInquiry {
  fullName: string;
  organization: string;
  email: string;
  phone?: string;
  inquiryType: ContactInquiryType;
  message: string;
  website?: string; // Honeypot; must remain empty for genuine visitors.
}

export interface ContactInquiryResponse {
  message?: string;
  reference?: string;
}
