import { IHttpResponse } from 'contracts/common';

export interface INotificationsSettingsService {
    get(provider: string): PromiseLike<IHttpResponse<any>>;
    update(data: Object): PromiseLike<IHttpResponse<void>>;
}