import { IGetRequestOptions, IHttpResponse } from 'infrastructure/common/contracts';
import { IArticleSettings } from '../';

export interface IArticleSettingsService {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>>;
    update(data: IArticleSettings): PromiseLike<IHttpResponse<void>>;
}