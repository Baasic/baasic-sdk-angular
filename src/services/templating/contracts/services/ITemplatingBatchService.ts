import { IBaasicResponse, IHttpResponse } from 'common/contracts';
import { ITemplate } from 'services/templating/contracts';

export interface ITemplatingBatchService {
    create(data: ITemplate[]): PromiseLike<IHttpResponse<IBaasicResponse[]>>;
    update(data: ITemplate[]): PromiseLike<IHttpResponse<IBaasicResponse[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
}