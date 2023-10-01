import { StatusField } from './workExPeer.dto';
export class CreateResidentialPeerDto {
  public name!: string;
  public email!: string;
  public phone!: string;
  public ref!: string;
  public verificationBy!: string;
}

export class IdentityValidationDTO{
  public isReal!: StatusField;
}

