import { IHttpResponse } from 'contracts/common';
import { IResetPassword, IRequestPasswordReset } from 'contracts/membership';

export interface IPasswordRecoveryService {
    requestReset(data: IRequestPasswordReset): PromiseLike<IHttpResponse<any>>;
    reset(data: IResetPassword): PromiseLike<IHttpResponse<any>>;
}