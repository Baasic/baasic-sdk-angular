import { IHttpResponse } from 'infrastructure/common/contracts';
import { IArticleFile } from '../';

export interface IArticleFilesBatchService {
    unlink(data: Object[]): PromiseLike<IHttpResponse<void>>;
    update(data: IArticleFile[]): PromiseLike<IHttpResponse<void>>;
    link(data: IArticleFile[]): PromiseLike<IHttpResponse<any>>;
}