import { IGetRequestOptions, IHttpResponse } from 'contracts/common';
import { IArticleSettings } from 'contracts/article';

export interface IArticleSettingsService {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>>;
    update(data: IArticleSettings): PromiseLike<IHttpResponse<void>>;
}