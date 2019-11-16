import { IUser } from './user.interface';

export interface IUserResponse {
  success: boolean;
  user: IUser;
}

export interface IUsersResponse {
  count: number;
  links: {};
  page: number;
  success: boolean;
  total_pages: number;
  total_users: number
  users: IUser[];
}