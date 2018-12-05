import { IBaasicQueryModel, IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IUserSocialLogin } from '../';
import { IUserSocialLoginRoute } from '../routeDefinitions';

export interface IUserSocialLoginService {
    routeDefinition: IUserSocialLoginRoute;
    get(username: string): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserSocialLogin>>>;
    remove(username: string, provider: any): PromiseLike<IHttpResponse<void>>;
}