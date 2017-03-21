import { IBaasicQueryModel, IHttpResponse, IOptions } from 'infrastructure/common/contracts';
import { IMeteringData } from 'services/metering/contracts';

export interface IMeteringStatisticsService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IMeteringData>>>;
}