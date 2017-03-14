import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';
import { IArticleTag, IArticleTagsSubscriptionsService } from 'contracts/article';

export interface IArticleTagsService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleTag>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleTag>>;
    update(data: IArticleTag): PromiseLike<IHttpResponse<void>>;
    remove(data: IArticleTag): PromiseLike<IHttpResponse<void>>;
    subscriptions: IArticleTagsSubscriptionsService;
}