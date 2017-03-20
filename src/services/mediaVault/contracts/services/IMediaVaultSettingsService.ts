import { IHttpResponse } from 'infrastructure/common/contracts';
import { IMediaVaultSettings } from 'services/mediaVault/contracts';

export interface IMediaVaultSettingsService {
    get(): PromiseLike<IHttpResponse<IMediaVaultSettings>>;
    update(data: IMediaVaultSettings): PromiseLike<IHttpResponse<void>>;
}