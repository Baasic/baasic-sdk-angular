import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';
import { IUserSubscription, INotificationsSubscriptionsUsersBatchService } from 'contracts/notifications';

export interface INotificationsSubscriptionsUsersService {
    create(data: IUserSubscription): PromiseLike<IHttpResponse<IUserSubscription>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserSubscription>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserSubscription>>;
    remove(data: IUserSubscription): PromiseLike<IHttpResponse<void>>;
    update(data: IUserSubscription): PromiseLike<IHttpResponse<void>>;
    batch: INotificationsSubscriptionsUsersBatchService;
}