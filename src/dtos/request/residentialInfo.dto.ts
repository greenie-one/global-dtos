export class AddResidentialInfoDto {
  public address_line_1!: string;
  public address_line_2!: string;
  public landmark!: string;
  public pincode!: string;
  public city!: string;
  public state!: string;
  public country!: string;
  public start_date?: Date;
  public end_date?: Date;
}

export class UpdateResidentialInfoDto {
  public address_line_1?: string;
  public address_line_2?: string;
  public landmark?: string;
  public pincode?: string;
  public state?: string;
  public country?: string;
  public start_date?: Date;
  public end_date?: Date;
}

