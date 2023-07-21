export enum OtpType {
  EMAIL = 'EMAIL',
  MOBILE = 'MOBILE',
}

export class VerifyOtpDTO {
  otp: string;
  otpType: OtpType;
}

export class SendPeerOtpDTO {
  otpType: OtpType;
}

