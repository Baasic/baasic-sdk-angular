import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { ICustomerPaymentMethodService } from '../';

export interface ICouponUseService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>>;
    create(data: any): PromiseLike<IHttpResponse<void>>;
    update(data: any): PromiseLike<IHttpResponse<void>>;
    remove(data: any): PromiseLike<IHttpResponse<void>>;
}