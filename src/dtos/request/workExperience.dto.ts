export enum CompanyTypeEnum {
  Startup = 'Start-up (Funded)',
  EarlyStageStartup = 'Early Stage Startup',
  ProfitableStartup = 'Startup (Profitable)',
  FamilyOwnedBusiness = 'Family Owned Business',
  PrivateLimitedIndia = 'Private Limited (India)',
  PartnershipLLP = 'Partnership (LLP/LLC)',
  PublicLimitedCompany = 'Public Limited Company',
}

export class CreateWorkExperienceDto {
  public designation!: string;
  public companyType!: CompanyTypeEnum;
  public email!: string;
  public workMode?: string;
  public department!: string;
  public workType?: string;
  public companyName!: string;
  public companyId?: string;
    host_whitelist: ["linkedin.com", "www.linkedin.com"],
  })
  public linkedInUrl?: string;
  public reason_for_leaving?: string;
  public salary?: string;
  public dateOfJoining!: string;
  public dateOfLeaving?: string;
}

export class UpdateWorkExperienceDto {
  public designation?: string;
  public companyType?: CompanyTypeEnum;
  public email?: string;
  public workMode?: string;
  public department?: string;
  public workType?: string;
  public companyName?: string;
  public companyId?: string;
  public reason_for_leaving?: string;
  public salary?: string;
  public dateOfJoining?: string;
  public linkedInUrl?: string;
  public dateOfLeaving?: string;
}

