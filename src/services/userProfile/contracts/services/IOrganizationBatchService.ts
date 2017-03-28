import { IHttpResponse } from 'infrastructure/common/contracts';
import { IOrganization } from '../';

export interface IOrganizationBatchService {
    create(data: IOrganization[]): PromiseLike<IHttpResponse<any>>;
    update(data: IOrganization[]): PromiseLike<IHttpResponse<void>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
}