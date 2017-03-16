import { IBaasicModel } from 'common/contracts';
import { ISkill } from 'contracts/userProfile';

export interface IUserProfileSkill extends IBaasicModel {
    skill?: ISkill,
    skillId?: string,
    skillName?: string,
    userId?: string
}