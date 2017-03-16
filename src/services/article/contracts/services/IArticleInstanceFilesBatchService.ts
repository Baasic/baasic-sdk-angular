import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IArticleFile } from 'contracts/article';

export interface IArticleInstanceFilesBatchService {
    unlink(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<void>>;
    update(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<void>>;
    link(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<any>>;
}