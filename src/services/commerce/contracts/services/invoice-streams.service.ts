import { IHttpResponse } from 'infrastructure/common/contracts';

export interface IInvoiceStreamsService {
    get(data: any): PromiseLike<IHttpResponse<any>>;
    getBlob(data: any): PromiseLike<IHttpResponse<any>>;
}