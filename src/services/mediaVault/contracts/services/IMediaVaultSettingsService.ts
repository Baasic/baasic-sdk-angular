import { IHttpResponse } from 'contracts/common';
import { IMediaVaultSettings } from 'contracts/mediaVault';

export interface IMediaVaultSettingsService {
    get(): PromiseLike<IHttpResponse<IMediaVaultSettings>>;
    update(data: IMediaVaultSettings): PromiseLike<IHttpResponse<void>>;
}