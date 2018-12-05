import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IResetPassword, IRequestPasswordReset } from '../';
import { IPasswordRecoveryRoute } from '../routeDefinitions';

export interface IPasswordRecoveryService {
    routeDefinition: IPasswordRecoveryRoute;
    requestReset(data: IRequestPasswordReset): PromiseLike<IHttpResponse<any>>;
    reset(data: IResetPassword): PromiseLike<IHttpResponse<any>>;
}