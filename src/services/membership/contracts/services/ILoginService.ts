import { IUser } from '../';

export interface ILoginService {
    login(data: any): PromiseLike<any>;
    loadUserData(data: any): IUser;
    logout(token: string, type: string): PromiseLike<void>;
}