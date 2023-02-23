/* eslint-disable @typescript-eslint/naming-convention */
export interface RegistrationInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ProfileAttributes {
  idNumber: string;
  kraPin: string;
  phoneNumber: string;
  idType: string;
  profilePicture: string;
}

export interface TokenResponseModel {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  tokenExpirationDate: number;
}
