export enum FeedbackType {
  AADHAR = 'aadhar',
  PAN = 'pan',
  DRIVING_LICENSE = 'driving_license',
  ADD_WORK_EXP = 'add_work_exp',
  ADD_WORK_PEER = 'add_work_peer',
  ADD_RESIDENTIAL_INFO = 'add_residential_info',
  ADD_RESIDENTIAL_PEER = 'add_residential_peer'
}

export class AddFeedbackDto {
  public type: FeedbackType;
  public flowExperience: string;
  public referToSomeone: string;
  public message?: string;
}

