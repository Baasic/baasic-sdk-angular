import { IHttpResponse } from 'contracts/common';
import { IArticleSubscription, IArticleTag } from 'contracts/article';

export interface IArticleTagsSubscriptionsService {
    subscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>>;
    isSubscribed(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>>;
    unSubscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<void>>;
}