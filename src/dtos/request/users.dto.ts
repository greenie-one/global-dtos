export class CreateUserDto {
  email: string;
  mobileNumber?: string;
  password?: string;
}

export class LoginDto {
  email: string;
  mobileNumber: string;
  password: string;
}

export class UpdateUserDto {
  email: string;
  mobileNumber?: string;
}

export enum ValidationType {
  LOGIN = 'LOGIN',
  SINGUP = 'SIGNUP',
}

export class ValidateOtpDTO {
  otp: string;
  validationId: string;
}

export class ResendOtpDTO {
  validationId: string;
}

