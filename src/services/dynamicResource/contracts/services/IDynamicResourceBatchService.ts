import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IDynamicObject } from '../';

export interface IDynamicResourceBatchService {
    create(data: any[]): PromiseLike<IHttpResponse<IDynamicObject[]>>;
    update(data: any[]): PromiseLike<IHttpResponse<void>>;
    patch(data: any[]): PromiseLike<IHttpResponse<void>>;
    remove(data: string[]): PromiseLike<IHttpResponse<void>>;
}