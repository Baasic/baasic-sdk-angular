import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';
import { IArticleFile } from 'contracts/article';

export interface IArticleInstanceFilesStreamsService {
    get(articleId: string, data: any): PromiseLike<IHttpResponse<any>>;
    getBlob(articleId: string, data: any): PromiseLike<IHttpResponse<any>>;
    update(articleId: string, data: any, stream: any): PromiseLike<IHttpResponse<any>>;
    create(articleId: string, data: IArticleFile, stream: any): PromiseLike<IHttpResponse<any>>;
}