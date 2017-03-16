import { IHttpResponse } from 'common/contracts';
import { IMediaVaultSettings } from 'contracts/mediaVault';

export interface IMediaVaultSettingsService {
    get(): PromiseLike<IHttpResponse<IMediaVaultSettings>>;
    update(data: IMediaVaultSettings): PromiseLike<IHttpResponse<void>>;
}