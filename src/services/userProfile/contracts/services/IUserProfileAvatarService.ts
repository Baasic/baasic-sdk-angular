import { IGetRequestOptions, IHttpResponse } from 'infrastructure/common/contracts';
import { IProfileAvatar, IUserProfileAvatarStreamsService } from 'services/userProfile/contracts';

export interface IUserProfileAvatarService {
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IProfileAvatar>>;
    update(data: IProfileAvatar): PromiseLike<IHttpResponse<void>>;
    link(id: string, data: IProfileAvatar): PromiseLike<IHttpResponse<any>>;
    unlink(data: IProfileAvatar, options?: any): PromiseLike<IHttpResponse<any>>;
    streams: IUserProfileAvatarStreamsService;
}