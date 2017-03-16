import { IUserInfo } from 'contracts/membership';

export interface ILoginService {
    login(data: any): PromiseLike<any>;
    loadUserData(data: any): IUserInfo;
    logout(token: string, type: string): PromiseLike<void>;
}