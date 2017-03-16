import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IRole } from 'contracts/membership';

export interface IRoleService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRole>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRole>>;
    create(data: IRole): PromiseLike<IHttpResponse<IRole>>;
    update(data: IRole): PromiseLike<IHttpResponse<IRole>>;
    remove(data: IRole): PromiseLike<IHttpResponse<any>>;
}