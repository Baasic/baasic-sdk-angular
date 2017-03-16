import { IUserInfo } from 'services/membership/contracts';

export interface ILoginService {
    login(data: any): PromiseLike<any>;
    loadUserData(data: any): IUserInfo;
    logout(token: string, type: string): PromiseLike<void>;
}