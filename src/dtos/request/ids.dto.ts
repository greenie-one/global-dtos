export enum IDTypeEnum {
  AADHAR = 'AADHAR',
  PAN = 'PAN',
  DRIVING_LICENSE = 'DRIVING_LICENSE',
}

export class AddIDDto {
  public id_type?: IDTypeEnum;
  public id_number?: string;
  public dob?: string;
}

export class VerifyIDDto {
  public otp!: string;
  public request_id!: string;
  public task_id!: string;
}

