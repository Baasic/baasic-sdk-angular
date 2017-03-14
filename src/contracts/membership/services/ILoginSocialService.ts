import { IHttpResponse } from 'contracts/common';
import { ISocialLogin } from 'contracts/membership';

export interface ILoginSocialService {
    get(provider: string, returnUrl: string): PromiseLike<IHttpResponse<any>>;
    post(provider: string, data: ISocialLogin, options?: any): PromiseLike<void>;
    parseResponse(provider: string, returnUrl: string): any;
}