import { IGetRequestOptions, IHttpResponse } from 'contracts/common';
import { IMeteringSettings } from 'contracts/metering';

export interface IMeteringSettingsService {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMeteringSettings>>;
    update(data: IMeteringSettings): PromiseLike<IHttpResponse<void>>;
}