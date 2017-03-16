import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IArticle, IArticleTag } from 'services/article/contracts';

export interface IArticleInstanceTagsService {
    find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleTag>>>;
    get(articleId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleTag>>;
    create(data: IArticleTag): PromiseLike<IHttpResponse<IArticleTag>>;
    remove(data: IArticleTag): PromiseLike<IHttpResponse<void>>;
    removeAll(data: IArticle): PromiseLike<IHttpResponse<void>>;
}