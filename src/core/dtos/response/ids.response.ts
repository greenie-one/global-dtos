import { IDTypeEnum } from '../request/ids.dto';
export interface IDVerification {
  isVerified: boolean;
  lastUpdated: Date;
}

export interface SingleID {
  id: string;
  idType: IDTypeEnum;
  idNumber: string;
  user: string;
  address: NormalizedAddress;
  location: string;
  verification: IDVerification;
  createdAt: Date;
  updatedAt: Date;
}

export type GetIDsResponse = SingleID[];
export class NormalizedAddress {
  address_line_1: string;
  address_line_2: string;
  street: string
  city: string;
  state: string;
  country: string;
  pincode: string;
  type: string
}

