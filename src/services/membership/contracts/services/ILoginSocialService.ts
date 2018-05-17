import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { ISocialLogin } from '../';
import { ILoginSocialRoute } from '../routeDefinitions';

export interface ILoginSocialService {
    routeDefinition: ILoginSocialRoute;
    get(provider: string, returnUrl: string): PromiseLike<IHttpResponse<any>>;
    post(provider: string, data: ISocialLogin, options?: any): PromiseLike<void>;
    parseResponse(provider: string, returnUrl: string): any;
}