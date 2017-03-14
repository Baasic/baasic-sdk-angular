import { IHttpResponse } from 'contracts/common';
import { IArticleFile } from 'contracts/article';

export interface IArticleFilesBatchService {
    unlink(data: Object[]): PromiseLike<IHttpResponse<void>>;
    update(data: IArticleFile[]): PromiseLike<IHttpResponse<void>>;
    link(data: IArticleFile[]): PromiseLike<IHttpResponse<any>>;
}