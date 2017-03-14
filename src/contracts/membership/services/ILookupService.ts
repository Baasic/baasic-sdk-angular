import { IGetRequestOptions, IHttpResponse } from 'contracts/common';
import { ILookup } from 'contracts/membership';

export interface ILookupService {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<ILookup>>;
}