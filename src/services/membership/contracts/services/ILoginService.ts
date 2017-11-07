import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { ILoginData, IUserInfo } from '../';

export interface ILoginService {
    login(data: ILoginData): PromiseLike<any>;
    loadUserData(data: any): PromiseLike<IHttpResponse<IUserInfo>>;
    logout(token: string, type: string): PromiseLike<void>;
}