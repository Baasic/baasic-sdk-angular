import { IBaasicResponse, IHttpResponse } from 'common/contracts';
import { ITemplate } from 'contracts/templating';

export interface ITemplatingBatchService {
    create(data: ITemplate[]): PromiseLike<IHttpResponse<IBaasicResponse[]>>;
    update(data: ITemplate[]): PromiseLike<IHttpResponse<IBaasicResponse[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
}