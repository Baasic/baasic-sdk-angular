import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IUserSubscription } from '../';

export interface INotificationsSubscriptionsUsersBatchService {
    create(data: IUserSubscription[]): PromiseLike<IHttpResponse<IUserSubscription[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
    update(data: IUserSubscription[]): PromiseLike<IHttpResponse<void>>;
}