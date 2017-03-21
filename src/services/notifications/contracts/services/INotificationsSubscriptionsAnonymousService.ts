import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'infrastructure/common/contracts';
import { IAnonymousSubscription, INotificationsSubscriptionsAnonymousBatchService } from 'services/notifications/contracts';

export interface INotificationsSubscriptionsAnonymousService {
    create(data: IAnonymousSubscription): PromiseLike<IHttpResponse<IAnonymousSubscription>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IAnonymousSubscription>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IAnonymousSubscription>>;
    remove(data: IAnonymousSubscription): PromiseLike<IHttpResponse<void>>;
    update(data: IAnonymousSubscription): PromiseLike<IHttpResponse<void>>;
    batch: INotificationsSubscriptionsAnonymousBatchService;
}