import { IBaasicModel } from 'common/contracts';
import { ISkill, IUserProfile, IUserProfileSkill } from 'contracts/userProfile';

export interface IUserSkill extends IBaasicModel, IUserProfileSkill {
    userProfile?: IUserProfile
}