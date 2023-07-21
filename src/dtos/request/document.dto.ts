export enum DocumentType {
  WORK = 'work',
  CERTIFICATE = 'certificate',
  MARKSHEET = 'marksheet',
  TAX = 'tax',
  EDUCATION = 'education',
  OTHER = 'other',
}

export class CreateDocumentDto {
  public name: string;
  public type: DocumentType;
  public privateUrl: string;
  public workExperience?: string;
}

export class UpdateDocumentDto {
  public name: string;
  public type: DocumentType;
  public privateUrl: string;
  public workExperience?: string;
}
