import { IHttpResponse } from 'common/contracts';
import { IResetPassword, IRequestPasswordReset } from 'contracts/membership';

export interface IPasswordRecoveryService {
    requestReset(data: IRequestPasswordReset): PromiseLike<IHttpResponse<any>>;
    reset(data: IResetPassword): PromiseLike<IHttpResponse<any>>;
}