import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../../infrastructure/common/contracts';
import { ICommerceLookupsInvoiceStatusBatchService } from '../../';

export interface ICommerceLookupsInvoiceStatusService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>>;
    update(data: any): PromiseLike<IHttpResponse<void>>;
    create(data: any): PromiseLike<IHttpResponse<any>>;
    remove(data: any): PromiseLike<IHttpResponse<void>>;
    batch: ICommerceLookupsInvoiceStatusBatchService;
}