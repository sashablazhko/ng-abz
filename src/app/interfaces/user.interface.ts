export interface IUser {
  "id": number;
  "name": string;
  "email": string;
  "phone":string;
  "position_id":number;
  "position": string;
  "photo": string;
  "registration_timestamp"?: number;
}