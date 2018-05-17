import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { ILoginData, IUserInfo } from '../';
import { ILoginRoute } from '../routeDefinitions';

export interface ILoginService {
    routeDefinition: ILoginRoute;
    login(data: ILoginData): PromiseLike<any>;
    loadUserData(data: any): PromiseLike<IHttpResponse<IUserInfo>>;
    logout(token: string, type: string): PromiseLike<void>;
}