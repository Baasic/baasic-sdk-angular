import { IACLService, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'infrastructure/common/contracts';
import {
    IUserProfile,
    IUserProfileAvatarService,
    IUserProfileEducationService,
    IUserProfileSkillService,
    IUserProfileWorkService
} from 'services/userProfile/contracts';

export interface IUserProfileService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserProfile>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserProfile>>;
    create(data: IUserProfile): PromiseLike<IHttpResponse<IUserProfile>>;
    update(data: IUserProfile): PromiseLike<IHttpResponse<void>>;
    remove(data: IUserProfile): PromiseLike<IHttpResponse<void>>;
    acl: IACLService;
    education: IUserProfileEducationService;
    avatar: IUserProfileAvatarService;
    skill: IUserProfileSkillService;
    work: IUserProfileWorkService;
}