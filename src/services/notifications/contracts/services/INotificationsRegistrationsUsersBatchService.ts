import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IUserRegistration } from '../';

export interface INotificationsRegistrationsUsersBatchService {
    create(data: IUserRegistration[]): PromiseLike<IHttpResponse<IUserRegistration[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
    update(data: IUserRegistration[]): PromiseLike<IHttpResponse<void>>;
}