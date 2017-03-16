import { IHttpResponse } from 'common/contracts';
import { IFileEntry } from 'contracts/files';

export interface IFilesBatchService {
    update(data: IFileEntry[]): PromiseLike<IHttpResponse<void>>;
    link(data: IFileEntry[]): PromiseLike<IHttpResponse<any>>;
    unlink(data: Object[]): PromiseLike<IHttpResponse<void>>;
}