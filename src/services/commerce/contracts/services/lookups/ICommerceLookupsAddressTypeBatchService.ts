import { IHttpResponse } from 'infrastructure/common/contracts';

export interface ICommerceLookupsAddressTypeBatchService {
    create(data: any): PromiseLike<IHttpResponse<any>>;
    update(data: any): PromiseLike<IHttpResponse<void>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
}