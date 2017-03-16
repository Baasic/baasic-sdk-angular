import { IHttpResponse } from 'common/contracts';
import { ISocialLogin } from 'services/membership/contracts';

export interface ILoginSocialService {
    get(provider: string, returnUrl: string): PromiseLike<IHttpResponse<any>>;
    post(provider: string, data: ISocialLogin, options?: any): PromiseLike<void>;
    parseResponse(provider: string, returnUrl: string): any;
}