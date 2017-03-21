import { IGetRequestOptions, IHttpResponse } from 'infrastructure/common/contracts';
import { IMeteringSettings } from 'services/metering/contracts';

export interface IMeteringSettingsService {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMeteringSettings>>;
    update(data: IMeteringSettings): PromiseLike<IHttpResponse<void>>;
}