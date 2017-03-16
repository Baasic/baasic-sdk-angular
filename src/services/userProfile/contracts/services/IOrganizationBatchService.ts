import { IHttpResponse } from 'common/contracts';
import { IOrganization } from 'services/userProfile/contracts';

export interface IOrganizationBatchService {
    create(data: IOrganization[]): PromiseLike<IHttpResponse<any>>;
    update(data: IOrganization[]): PromiseLike<IHttpResponse<void>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
}