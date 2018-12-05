import { IOptions, IAppUser, IBaseRoute } from '../../../..';

export interface IUserSocialLoginRoute extends IBaseRoute {
    getRoute: string;
    removeRoute: string;
    get(username: string): any;
    remove(username: string, provider: any): any;    
}