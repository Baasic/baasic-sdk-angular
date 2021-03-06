import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IMeteringCategory, IMeteringCategoryBatchService } from '../';

export interface IMeteringCategoryService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IMeteringCategory>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMeteringCategory>>;
    create(data: IMeteringCategory): PromiseLike<IHttpResponse<IMeteringCategory>>;
    update(data: IMeteringCategory): PromiseLike<IHttpResponse<void>>;
    remove(data: IMeteringCategory): PromiseLike<IHttpResponse<void>>;
    batch: IMeteringCategoryBatchService
}