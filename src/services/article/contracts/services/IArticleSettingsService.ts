import { IGetRequestOptions, IHttpResponse } from 'common/contracts';
import { IArticleSettings } from 'services/article/contracts';

export interface IArticleSettingsService {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>>;
    update(data: IArticleSettings): PromiseLike<IHttpResponse<void>>;
}