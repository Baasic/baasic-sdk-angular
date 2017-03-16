import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { ICustomerPaymentMethodService } from 'services/commerce/contracts';

export interface ICustomerService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>>
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>>;
    update(data: any): PromiseLike<IHttpResponse<void>>;
    remove(data: any): PromiseLike<IHttpResponse<void>>;
    paymentMethods: ICustomerPaymentMethodService;
}