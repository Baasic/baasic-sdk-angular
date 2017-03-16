import { IGetRequestOptions, IHttpResponse } from 'common/contracts';
import { ILookup } from 'services/membership/contracts';

export interface ILookupService {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<ILookup>>;
}