import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'infrastructure/common/contracts';
import { IArticleTag, IArticleTagsSubscriptionsService } from '../';

export interface IArticleTagsService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleTag>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleTag>>;
    update(data: IArticleTag): PromiseLike<IHttpResponse<void>>;
    remove(data: IArticleTag): PromiseLike<IHttpResponse<void>>;
    subscriptions: IArticleTagsSubscriptionsService;
}