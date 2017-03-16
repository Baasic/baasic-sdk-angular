import { IHttpResponse } from 'common/contracts';
import { IArticleSubscription } from 'contracts/article';

export interface IArticleInstanceSubscriptionsCommentRequiresModerationService {
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    unSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<void>>;
}