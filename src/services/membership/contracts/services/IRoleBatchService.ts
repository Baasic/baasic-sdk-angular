import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IRole } from '../';

export interface IRoleBatchService {
    create(data: IRole[]): PromiseLike<IHttpResponse<IRole[]>>;
    update(data: IRole[]): PromiseLike<IHttpResponse<void>>;
    remove(data: IRole[]): PromiseLike<IHttpResponse<void>>;
}