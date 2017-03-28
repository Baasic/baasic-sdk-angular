import { IBaasicResponse, IHttpResponse } from '../../../../infrastructure/common/contracts';
import { ITemplate } from '../';

export interface ITemplatingBatchService {
    create(data: ITemplate[]): PromiseLike<IHttpResponse<IBaasicResponse[]>>;
    update(data: ITemplate[]): PromiseLike<IHttpResponse<IBaasicResponse[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
}