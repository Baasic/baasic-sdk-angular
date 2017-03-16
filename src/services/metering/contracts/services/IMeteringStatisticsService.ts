import { IBaasicQueryModel, IHttpResponse, IOptions } from 'contracts/common';
import { IMeteringData } from 'contracts/metering';

export interface IMeteringStatisticsService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IMeteringData>>>;
}