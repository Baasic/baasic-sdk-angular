import { IBaasicModel } from 'infrastructure/common/contracts';
import { ISkill, IUserProfile, IUserProfileSkill } from 'services/userProfile/contracts';

export interface IUserSkill extends IBaasicModel, IUserProfileSkill {
    userProfile?: IUserProfile
}