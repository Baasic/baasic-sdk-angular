import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IMeteringData } from '../';

export interface IMeteringBatchService {
    create(data: IMeteringData[]): PromiseLike<IHttpResponse<IMeteringData[]>>;
    update(data: IMeteringData[]): PromiseLike<IHttpResponse<void>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
}