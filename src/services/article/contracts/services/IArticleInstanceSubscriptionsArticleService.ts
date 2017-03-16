import { IHttpResponse } from 'common/contracts';
import { IArticle, IArticleSubscription } from 'contracts/article';

export interface IArticleInstanceSubscriptionsArticleService {
    subscribe(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    isSubscribed(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    unSubscribe(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<void>>;
}