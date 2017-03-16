import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';
import { IInvoiceStreamsService } from 'contracts/commerce';

export interface IInvoiceService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>>;
    update(data: any): PromiseLike<IHttpResponse<void>>;
    remove(data: any): PromiseLike<IHttpResponse<void>>;
    streams: IInvoiceStreamsService;
}