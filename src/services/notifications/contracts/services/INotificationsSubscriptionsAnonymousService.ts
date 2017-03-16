import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';
import { IAnonymousSubscription, INotificationsSubscriptionsAnonymousBatchService } from 'contracts/notifications';

export interface INotificationsSubscriptionsAnonymousService {
    create(data: IAnonymousSubscription): PromiseLike<IHttpResponse<IAnonymousSubscription>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IAnonymousSubscription>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IAnonymousSubscription>>;
    remove(data: IAnonymousSubscription): PromiseLike<IHttpResponse<void>>;
    update(data: IAnonymousSubscription): PromiseLike<IHttpResponse<void>>;
    batch: INotificationsSubscriptionsAnonymousBatchService;
}