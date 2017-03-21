import { IHttpResponse } from 'infrastructure/common/contracts';
import { IMediaEntry } from 'services/mediaVault/contracts';

export interface IMediaVaultBatchService {
    update(data: IMediaEntry[]): PromiseLike<IHttpResponse<void>>;
    remove(data: any[]): PromiseLike<IHttpResponse<void>>;
}