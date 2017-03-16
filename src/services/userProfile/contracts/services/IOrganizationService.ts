import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IOrganization, IOrganizationBatchService } from 'contracts/userProfile';

export interface IOrganizationService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IOrganization>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IOrganization>>;
    create(data: IOrganization): PromiseLike<IHttpResponse<IOrganization>>;
    update(data: IOrganization): PromiseLike<IHttpResponse<void>>;
    remove(data: IOrganization): PromiseLike<IHttpResponse<void>>;
    batch: IOrganizationBatchService;
}