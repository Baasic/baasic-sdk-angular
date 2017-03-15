import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';
import { IUserEducation } from 'contracts/userProfile';

export interface IUserProfileEducationService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserEducation>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserEducation>>;
    create(data: IUserEducation): PromiseLike<IHttpResponse<IUserEducation>>;
    update(data: IUserEducation): PromiseLike<IHttpResponse<void>>;
    remove(data: IUserEducation): PromiseLike<IHttpResponse<void>>;
}