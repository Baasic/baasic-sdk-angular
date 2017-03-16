import { IGetRequestOptions, IHttpResponse } from 'common/contracts';
import { IMeteringSettings } from 'contracts/metering';

export interface IMeteringSettingsService {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMeteringSettings>>;
    update(data: IMeteringSettings): PromiseLike<IHttpResponse<void>>;
}