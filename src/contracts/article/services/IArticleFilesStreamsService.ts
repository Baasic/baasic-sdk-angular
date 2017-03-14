import { IHttpResponse } from 'contracts/common';
import { IArticleFile } from 'contracts/article';

export interface IArticleFilesStreamsService {
    get(data: any): PromiseLike<IHttpResponse<any>>;
    getBlob(data: any): PromiseLike<IHttpResponse<any>>;
    update(data: any, stream: any): PromiseLike<IHttpResponse<any>>;
    create(data: IArticleFile, stream: any): PromiseLike<IHttpResponse<any>>;
}