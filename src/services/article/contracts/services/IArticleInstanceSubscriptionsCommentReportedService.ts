import { IHttpResponse } from 'contracts/common';
import { IArticleSubscription } from 'contracts/article';

export interface IArticleInstanceSubscriptionsCommentReportedService {
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    unSubscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<void>>;
}