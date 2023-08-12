import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Validate,
  ValidateIf,
  ValidateNested,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  validate,
export enum WorkVerificationBy {
  COLLEAGUE = 'COLLEAGUE',
  REPORTING_MANAGER = 'REPORTING_MANAGER',
  LINE_MANAGER = 'LINE_MANAGER',
  HR = 'HR',
  CXO = 'CXO',
}

export enum Rating {
  NON_COLLABORATIVE = 'non-collaborative',
  RARELY_COLLABORATIVE = 'rarely-collaborative',
  OCCASIONALLY_COLLABORATIVE = 'occasionally-collaborative',
  MODERATELY_COLLABORATIVE = 'moderately-collaborative',
  HIGHLY_COLLABORATIVE = 'highly-collaborative',
  NOT_GIVEN = 'not-given',
}

export enum State {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export class StatusField {
  public state!: State.ACCEPTED | State.REJECTED;
  public dispute_type?: string;
  public dispute_reason?: string;
}

export class SelectedFieldsDTO {
  // From Work Ex Optional fields
  public candidateId?: StatusField;
  public department?: StatusField;
  public dateOfJoining?: StatusField;
  public dateOfLeaving?: StatusField;
  public companyName?: StatusField;
  public workType?: StatusField;
  public workMode?: StatusField;
  public salary?: StatusField;
  public companyId?: StatusField;
}

export class AllQuestionsDTO {
  // From Work Ex Mandatory Questions
  public attitudeRating!:
    | Rating.HIGHLY_COLLABORATIVE
    | Rating.MODERATELY_COLLABORATIVE
    | Rating.NON_COLLABORATIVE
    | Rating.OCCASIONALLY_COLLABORATIVE
    | Rating.RARELY_COLLABORATIVE;
  public peerPost!: StatusField;
  public review!: string;
  public designation!: StatusField;
}

export class HRQuestionsDTO {
  // From Work Ex HR Questions
  public exitProcedure!: StatusField;
  public eligibleForRehire!: StatusField;
}

export class CreateWorkPeerDto {
  public name!: string;
  public email!: string;
  public phone!: string;
  public ref!: string;
  public verificationBy!: WorkVerificationBy;
  public selectedFields!: string[];
  public skills!: string[];
  public documents!: string[];
}

class UpdateSkillsVerification {
  public id!: string;
  public status!: StatusField;
}

class UpdateDocumentsVerification {
  public id!: string;
  public status!: StatusField;
}

export class IsValidNestedQuestion implements ValidatorConstraintInterface {
  async validate(otherQuestions) {
    let valid = false;
    const tryOne = plainToInstance<unknown, object>(HRQuestionsDTO, otherQuestions);
    await validate(tryOne, { whitelist: true, forbidNonWhitelisted: true }).then((errors) => {
      if (errors.length === 0) valid = true;
    });
    return valid;
  }

  defaultMessage() {
    return `'otherQuestions' must be either HRQuestionFieldsDTO or ExceptHRQuestionFieldsDTO`;
  }

}

export class UpdatePeerWorkVerificationDto {
  public selectedFields?: SelectedFieldsDTO;
  public allQuestions!: AllQuestionsDTO;
  public otherQuestions?: HRQuestionsDTO;
  public skills!: UpdateSkillsVerification[];
  public documents!: UpdateDocumentsVerification[];
}

