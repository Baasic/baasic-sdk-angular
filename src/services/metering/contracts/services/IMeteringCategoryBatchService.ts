import { IHttpResponse } from 'common/contracts';
import { IMeteringCategory } from 'contracts/metering';

export interface IMeteringCategoryBatchService {
    create(data: IMeteringCategory[]): PromiseLike<IHttpResponse<IMeteringCategory[]>>;
    update(data: IMeteringCategory[]): PromiseLike<IHttpResponse<void>>;
    delete(ids: string[]): PromiseLike<IHttpResponse<void>>;
}