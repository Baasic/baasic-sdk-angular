import { IHttpResponse } from 'common/contracts';
import { IArticleSubscription } from 'services/article/contracts';

export interface IArticleInstanceSubscriptionsCommentRequiresModerationService {
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    unSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<void>>;
}