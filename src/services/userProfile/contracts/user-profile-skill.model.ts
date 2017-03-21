import { IBaasicModel } from 'infrastructure/common/contracts';
import { ISkill } from 'services/userProfile/contracts';

export interface IUserProfileSkill extends IBaasicModel {
    skill?: ISkill,
    skillId?: string,
    skillName?: string,
    userId?: string
}