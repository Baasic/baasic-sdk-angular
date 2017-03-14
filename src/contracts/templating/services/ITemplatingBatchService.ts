import { IBaasicResponse, IHttpResponse } from 'contracts/common';
import { ITemplate } from 'contracts/templating';

export interface ITemplatingBatchService {
    create(data: ITemplate[]): PromiseLike<IHttpResponse<IBaasicResponse[]>>;
    update(data: ITemplate[]): PromiseLike<IHttpResponse<IBaasicResponse[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
}