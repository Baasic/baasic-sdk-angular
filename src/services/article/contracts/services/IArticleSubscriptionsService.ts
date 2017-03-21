import { IHttpResponse } from 'infrastructure/common/contracts';
import { IArticleSubscription } from 'services/article/contracts';

export interface IArticleSubscriptionsService {
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    unSubscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<void>>;
}