import { IBaasicModel } from 'common/contracts';
import { IUserProfile, IUserProfileWork } from 'contracts/userProfile';

export interface IUserWork extends IUserProfileWork, IBaasicModel {
    userProfile?: IUserProfile
}