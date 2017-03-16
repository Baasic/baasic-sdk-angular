import { IBaasicQueryModel, IHttpResponse } from 'common/contracts';
import { IUserSocialLogin } from 'contracts/membership';

export interface IUserSocialLoginService {
    get(username: string): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserSocialLogin>>>;
    remove(username: string, provider: any): PromiseLike<IHttpResponse<void>>;
}