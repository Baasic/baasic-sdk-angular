import { IHttpResponse } from 'contracts/common';
import { IUserRegistration } from 'contracts/notifications';

export interface INotificationsRegistrationsUsersBatchService {
    create(data: IUserRegistration[]): PromiseLike<IHttpResponse<IUserRegistration[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
    update(data: IUserRegistration[]): PromiseLike<IHttpResponse<void>>;
}