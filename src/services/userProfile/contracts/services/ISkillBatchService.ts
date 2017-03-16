import { IHttpResponse } from 'common/contracts';
import { ISkill } from 'contracts/userProfile';

export interface ISkillBatchService {
    create(data: ISkill[]): PromiseLike<IHttpResponse<any>>;
    update(data: ISkill[]): PromiseLike<IHttpResponse<void>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>
}