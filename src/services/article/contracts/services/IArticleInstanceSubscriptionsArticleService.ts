import { IHttpResponse } from 'infrastructure/common/contracts';
import { IArticle, IArticleSubscription } from 'services/article/contracts';

export interface IArticleInstanceSubscriptionsArticleService {
    subscribe(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    isSubscribed(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    unSubscribe(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<void>>;
}