import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';
import { IUserSkill } from 'contracts/userProfile';

export interface IUserProfileSkillService {
    find(options: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserSkill>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserSkill>>;
    create(data: IUserSkill): PromiseLike<IHttpResponse<IUserSkill>>;
    update(data: IUserSkill): PromiseLike<IHttpResponse<void>>;
    remove(data: IUserSkill): PromiseLike<IHttpResponse<void>>;
}