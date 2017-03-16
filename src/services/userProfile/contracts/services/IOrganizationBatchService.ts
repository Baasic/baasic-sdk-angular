import { IHttpResponse } from 'contracts/common';
import { IOrganization } from 'contracts/userProfile';

export interface IOrganizationBatchService {
    create(data: IOrganization[]): PromiseLike<IHttpResponse<any>>;
    update(data: IOrganization[]): PromiseLike<IHttpResponse<void>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
}