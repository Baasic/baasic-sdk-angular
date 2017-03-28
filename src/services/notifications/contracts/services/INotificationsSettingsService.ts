import { IHttpResponse } from '../../../../infrastructure/common/contracts';

export interface INotificationsSettingsService {
    get(provider: string): PromiseLike<IHttpResponse<any>>;
    update(data: Object): PromiseLike<IHttpResponse<void>>;
}