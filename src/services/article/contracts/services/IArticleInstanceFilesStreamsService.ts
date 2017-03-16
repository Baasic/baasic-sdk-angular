import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IArticleFile } from 'services/article/contracts';

export interface IArticleInstanceFilesStreamsService {
    get(articleId: string, data: any): PromiseLike<IHttpResponse<any>>;
    getBlob(articleId: string, data: any): PromiseLike<IHttpResponse<any>>;
    update(articleId: string, data: any, stream: any): PromiseLike<IHttpResponse<any>>;
    create(articleId: string, data: IArticleFile, stream: any): PromiseLike<IHttpResponse<any>>;
}