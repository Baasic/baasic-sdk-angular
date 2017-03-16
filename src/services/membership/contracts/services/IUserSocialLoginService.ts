import { IBaasicQueryModel, IHttpResponse } from 'common/contracts';
import { IUserSocialLogin } from 'services/membership/contracts';

export interface IUserSocialLoginService {
    get(username: string): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserSocialLogin>>>;
    remove(username: string, provider: any): PromiseLike<IHttpResponse<void>>;
}