import { IHttpResponse } from 'common/contracts';
import { IUserSubscription } from 'contracts/notifications';

export interface INotificationsSubscriptionsUsersBatchService {
    create(data: IUserSubscription[]): PromiseLike<IHttpResponse<IUserSubscription[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
    update(data: IUserSubscription[]): PromiseLike<IHttpResponse<void>>;
}