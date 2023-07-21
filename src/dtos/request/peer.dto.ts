export enum State {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export enum Rating {
  NON_COLLABORATIVE = 'non-collaborative',
  RARELY_COLLABORATIVE = 'rarely-collaborative',
  OCCASIONALLY_COLLABORATIVE = 'occasionally-collaborative',
  MODERATELY_COLLABORATIVE = 'moderately-collaborative',
  HIGHLY_COLLABORATIVE = 'highly-collaborative',
  NOT_GIVEN = 'not-given',
}

export enum WorkVerificationBy {
  COLLEAGUE = 'COLLEAGUE',
  REPORTING_MANAGER = 'REPORTING_MANAGER',
  LINE_MANAGER = 'LINE_MANAGER',
  HR = 'HR',
  CXO = 'CXO',
}

export enum UpdateState {
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
}

export enum UpdateRating {
  NON_COLLABORATIVE = 'non-collaborative',
  RARELY_COLLABORATIVE = 'rarely-collaborative',
  OCCASIONALLY_COLLABORATIVE = 'occasionally-collaborative',
  MODERATELY_COLLABORATIVE = 'moderately-collaborative',
  HIGHLY_COLLABORATIVE = 'highly-collaborative',
}

export class StatusField {
  public state!: UpdateState;
  public dispute_type?: string;
  public dispute_description?: string;
}

export class WorkExperienceFieldsDto {
  // From Work Ex Optional fields
  public candidateId?: StatusField;
  public department?: StatusField;
  public dateOfJoining?: StatusField;
  public dateOfLeaving?: StatusField;
  public companyName?: StatusField;
  public workType?: StatusField;
  public workMode?: StatusField;
  public salary?: StatusField;
  // From Work Ex Mandatory fields
  public review: string;
  // From Work Ex Mandatory Questions
  public attitudeRating?: UpdateRating;
  public eligibleForRehire?: StatusField;
  // From Work Ex HR Questions
  public exitProcedure?: StatusField;
  // From Work Ex Except HR Questions
  public designation?: StatusField;
  public peerPost?: StatusField;
}

export class CreateWorkPeerDto {
  public name!: string;
  public email!: string;
  public phone!: string;
  public ref!: string;
  public verificationBy!: WorkVerificationBy;
  public optionalVerificationFields!: string[];
  public skills?: string[];
  public documents?: string[];
}

class UpdateSkillsVerification {
  public id!: string;
  public status!: StatusField;
}

export class UpdateDocumentsVerification {
  public id!: string;
  public status!: StatusField;
}

export class UpdatePeerWorkVerificationDto {
  public verificationFields!: WorkExperienceFieldsDto;
  public skills?: UpdateSkillsVerification[];
  public documents?: UpdateDocumentsVerification[];
}

