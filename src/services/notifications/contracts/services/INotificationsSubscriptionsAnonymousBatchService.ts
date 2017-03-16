import { IHttpResponse } from 'common/contracts';
import { IAnonymousSubscription } from 'contracts/notifications';

export interface INotificationsSubscriptionsAnonymousBatchService {
    create(data: IAnonymousSubscription[]): PromiseLike<IHttpResponse<IAnonymousSubscription[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
    update(data: IAnonymousSubscription[]): PromiseLike<IHttpResponse<void>>;
}