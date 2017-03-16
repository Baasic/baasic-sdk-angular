import { IBaasicModel } from 'common/contracts';
import { IUser } from 'contracts/notifications';

export interface IUserRegistration {
    provider: string,
    providerData: string,
    user?: IUser,
    userId: string
}