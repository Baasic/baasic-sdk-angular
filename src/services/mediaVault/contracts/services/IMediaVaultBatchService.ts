import { IHttpResponse } from 'common/contracts';
import { IMediaEntry } from 'contracts/mediaVault';

export interface IMediaVaultBatchService {
    update(data: IMediaEntry[]): PromiseLike<IHttpResponse<void>>;
    remove(data: any[]): PromiseLike<IHttpResponse<void>>;
}