import { IHttpResponse } from 'common/contracts';
import { IAnonymousSubscription } from 'services/notifications/contracts';

export interface INotificationsSubscriptionsAnonymousBatchService {
    create(data: IAnonymousSubscription[]): PromiseLike<IHttpResponse<IAnonymousSubscription[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
    update(data: IAnonymousSubscription[]): PromiseLike<IHttpResponse<void>>;
}