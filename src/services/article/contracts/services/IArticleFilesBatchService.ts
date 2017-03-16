import { IHttpResponse } from 'common/contracts';
import { IArticleFile } from 'services/article/contracts';

export interface IArticleFilesBatchService {
    unlink(data: Object[]): PromiseLike<IHttpResponse<void>>;
    update(data: IArticleFile[]): PromiseLike<IHttpResponse<void>>;
    link(data: IArticleFile[]): PromiseLike<IHttpResponse<any>>;
}