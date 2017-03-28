import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { ISkill, ISkillBatchService } from '../';

export interface ISkillService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<ISkill>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ISkill>>;
    create(data: ISkill): PromiseLike<IHttpResponse<ISkill>>;
    update(data: ISkill): PromiseLike<IHttpResponse<void>>;
    remove(data: ISkill): PromiseLike<IHttpResponse<void>>;
    batch: ISkillBatchService;
}