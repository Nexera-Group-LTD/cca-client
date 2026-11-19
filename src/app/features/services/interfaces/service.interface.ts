export interface CcaService {
  readonly number: string;
  readonly slug: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly category: string;
  readonly icon: string;
  readonly summary: string;
  readonly introduction: string;
  readonly offerings: readonly string[];
  readonly focus: string;
  readonly keywords: readonly string[];
}
