import { IBaasicModel } from 'common/contracts';
import { IUser } from 'services/notifications/contracts';

export interface IUserRegistration {
    provider: string,
    providerData: string,
    user?: IUser,
    userId: string
}