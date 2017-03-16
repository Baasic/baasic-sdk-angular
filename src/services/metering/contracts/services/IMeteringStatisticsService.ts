import { IBaasicQueryModel, IHttpResponse, IOptions } from 'common/contracts';
import { IMeteringData } from 'contracts/metering';

export interface IMeteringStatisticsService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IMeteringData>>>;
}