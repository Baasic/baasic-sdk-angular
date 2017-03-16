import { IGetRequestOptions, IHttpResponse } from 'common/contracts';
import { ILookup } from 'contracts/membership';

export interface ILookupService {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<ILookup>>;
}