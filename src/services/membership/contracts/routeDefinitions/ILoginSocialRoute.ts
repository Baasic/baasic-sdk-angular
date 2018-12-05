import { IBaseRoute } from '../../../..';

export interface ILoginSocialRoute extends IBaseRoute {
    getRoute: string;
    postRoute: string;
    get(provider: string, returnUrl: string): any;
    post(provider: string, options?: any): any;
}