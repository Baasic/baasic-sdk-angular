import { IHttpResponse } from 'contracts/common';

export interface IInvoiceStreamsService {
    get(data: any): PromiseLike<IHttpResponse<any>>;
    getBlob(data: any): PromiseLike<IHttpResponse<any>>;
}