import { IBaasicModel } from 'infrastructure/common/contracts';
import { IUserProfile, IUserProfileWork } from 'services/userProfile/contracts';

export interface IUserWork extends IUserProfileWork, IBaasicModel {
    userProfile?: IUserProfile
}