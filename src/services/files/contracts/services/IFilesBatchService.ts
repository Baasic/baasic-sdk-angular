import { IHttpResponse } from 'infrastructure/common/contracts';
import { IFileEntry } from 'services/files/contracts';

export interface IFilesBatchService {
    update(data: IFileEntry[]): PromiseLike<IHttpResponse<void>>;
    link(data: IFileEntry[]): PromiseLike<IHttpResponse<any>>;
    unlink(data: Object[]): PromiseLike<IHttpResponse<void>>;
}