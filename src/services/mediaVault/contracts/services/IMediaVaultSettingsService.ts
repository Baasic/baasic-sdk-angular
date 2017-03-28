import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IMediaVaultSettings } from '../';

export interface IMediaVaultSettingsService {
    get(): PromiseLike<IHttpResponse<IMediaVaultSettings>>;
    update(data: IMediaVaultSettings): PromiseLike<IHttpResponse<void>>;
}