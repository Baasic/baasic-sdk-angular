import { IHttpResponse } from 'common/contracts';
import { IAnonymousRegistration } from 'contracts/notifications';

export interface INotificationsRegistrationsAnonymousBatchService {
    create(data: IAnonymousRegistration[]): PromiseLike<IHttpResponse<IAnonymousRegistration[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
    update(data: IAnonymousRegistration[]): PromiseLike<IHttpResponse<void>>;
}