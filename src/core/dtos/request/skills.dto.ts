export enum SkillTypeEnum {
  AMATEUR = 'AMATEUR',
  EXPERT = 'EXPERT',
  BEGINNER = 'BEGINNER',
  SUPER_SPECIALIST = 'SUPER_SPECIALIST',
  MASTER = 'MASTER',
  HIGHLY_COMPETENT = 'HIGHLY_COMPETENT',
}

export class CreateSkillDto {
  public skillName!: string;
  public workExperience?: string;
  public expertise!: SkillTypeEnum;
}

export class UpdateSkillDto {
  public skillName?: string;
  public workExperience?: string;
  public expertise?: SkillTypeEnum;
}

