import { IHttpResponse } from 'common/contracts';
import { IArticleSubscription, IArticleTag } from 'services/article/contracts';

export interface IArticleTagsSubscriptionsService {
    subscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>>;
    isSubscribed(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>>;
    unSubscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<void>>;
}