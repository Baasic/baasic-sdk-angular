import { IHttpResponse } from 'common/contracts';
import { IAppUser, IRegisterUser } from 'contracts/membership';

export interface IRegisterService {
    create(data: IRegisterUser): PromiseLike<IHttpResponse<IAppUser>>;
    activate(data: string): PromiseLike<any>;
}