import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';

export interface IPaymentTransaction {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>>;
    create(data: any): PromiseLike<IHttpResponse<any>>
    update(data: any): PromiseLike<IHttpResponse<void>>;
    remove(data: any): PromiseLike<IHttpResponse<void>>;
}