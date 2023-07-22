export class CreateProfileDto {
  public firstName!: string;
  public lastName!: string;
  public bio?: string;
  public profilePic?: string;
  public descriptionTags?: string[];
}

export class UpdateProfileDto {
  public firstName?: string;
  public lastName?: string;
  public profilePic?: string;
  public bio?: string;
  public descriptionTags?: string[];
}

