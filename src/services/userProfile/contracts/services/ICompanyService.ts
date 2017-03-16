import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { ICompany, ICompanyBatchService } from 'contracts/userProfile';

export interface ICompanyService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<ICompany>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICompany>>;
    create(data: ICompany): PromiseLike<IHttpResponse<ICompany>>;
    update(data: ICompany): PromiseLike<IHttpResponse<void>>;
    remove(data: ICompany): PromiseLike<IHttpResponse<void>>;
    batch: ICompanyBatchService;
}