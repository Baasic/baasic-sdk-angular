import { IHttpResponse } from 'infrastructure/common/contracts';
import { ISkill } from '../';

export interface ISkillBatchService {
    create(data: ISkill[]): PromiseLike<IHttpResponse<any>>;
    update(data: ISkill[]): PromiseLike<IHttpResponse<void>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>
}