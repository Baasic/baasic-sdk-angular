import { IHttpResponse } from 'common/contracts';
import { IAppUser, IRegisterUser } from 'services/membership/contracts';

export interface IRegisterService {
    create(data: IRegisterUser): PromiseLike<IHttpResponse<IAppUser>>;
    activate(data: string): PromiseLike<any>;
}