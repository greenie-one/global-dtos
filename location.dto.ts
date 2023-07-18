import { IsNotEmpty, IsString } from 'class-validator';

export interface locationResponse {
  code?: string;
}

export class GPScompare {
  @IsString()
  @IsNotEmpty()
  public GPS: string;
}

export interface GetLocationResponse {
  id: string;
  coordinates: string;
  user: string;
}
