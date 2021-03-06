import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { ICompany, ICompanyBatchService } from '../';

export interface ICompanyService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<ICompany>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICompany>>;
    create(data: ICompany): PromiseLike<IHttpResponse<ICompany>>;
    update(data: ICompany): PromiseLike<IHttpResponse<void>>;
    remove(data: ICompany): PromiseLike<IHttpResponse<void>>;
    batch: ICompanyBatchService;
}