import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { ISkill, ISkillBatchService } from 'services/userProfile/contracts';

export interface ISkillService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<ISkill>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ISkill>>;
    create(data: ISkill): PromiseLike<IHttpResponse<ISkill>>;
    update(data: ISkill): PromiseLike<IHttpResponse<void>>;
    remove(data: ISkill): PromiseLike<IHttpResponse<void>>;
    batch: ISkillBatchService;
}