import { IGetRequestOptions, IHttpResponse } from 'infrastructure/common/contracts';
import { ILookup } from '../';

export interface ILookupService {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<ILookup>>;
}