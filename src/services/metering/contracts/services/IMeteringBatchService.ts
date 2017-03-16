import { IHttpResponse } from 'contracts/common';
import { IMeteringData } from 'contracts/metering';

export interface IMeteringBatchService {
    create(data: IMeteringData[]): PromiseLike<IHttpResponse<IMeteringData[]>>;
    update(data: IMeteringData[]): PromiseLike<IHttpResponse<void>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
}