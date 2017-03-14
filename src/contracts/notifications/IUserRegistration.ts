import { IBaasicModel } from 'contracts/common';
import { IUser } from 'contracts/notifications';

export interface IUserRegistration {
    provider: string,
    providerData: string,
    user?: IUser,
    userId: string
}