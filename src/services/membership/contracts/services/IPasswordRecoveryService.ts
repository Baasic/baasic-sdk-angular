import { IHttpResponse } from 'infrastructure/common/contracts';
import { IResetPassword, IRequestPasswordReset } from '../';

export interface IPasswordRecoveryService {
    requestReset(data: IRequestPasswordReset): PromiseLike<IHttpResponse<any>>;
    reset(data: IResetPassword): PromiseLike<IHttpResponse<any>>;
}