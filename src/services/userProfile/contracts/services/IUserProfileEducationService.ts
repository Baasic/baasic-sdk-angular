import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IUserEducation } from 'services/userProfile/contracts';

export interface IUserProfileEducationService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserEducation>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserEducation>>;
    create(data: IUserEducation): PromiseLike<IHttpResponse<IUserEducation>>;
    update(data: IUserEducation): PromiseLike<IHttpResponse<void>>;
    remove(data: IUserEducation): PromiseLike<IHttpResponse<void>>;
}