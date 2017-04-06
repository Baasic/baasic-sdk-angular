import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { INotificationUser } from './';

export interface IUserRegistration {
    provider: string,
    providerData: string,
    user?: INotificationUser,
    userId: string
}