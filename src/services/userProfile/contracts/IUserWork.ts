import { IBaasicModel } from 'contracts/common';
import { IUserProfile, IUserProfileWork } from 'contracts/userProfile';

export interface IUserWork extends IUserProfileWork, IBaasicModel {
    userProfile?: IUserProfile
}