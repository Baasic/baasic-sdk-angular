import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IUserWork } from 'contracts/userProfile';

export interface IUserProfileWorkService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserWork>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserWork>>;
    create(data: IUserWork): PromiseLike<IHttpResponse<IUserWork>>;
    update(data: IUserWork): PromiseLike<IHttpResponse<void>>;
    remove(data: IUserWork): PromiseLike<IHttpResponse<void>>;
}