import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { INotificationUser } from './';

export interface IUserSubscription extends IBaasicModel {
    channel: string,
    user?: INotificationUser,
    userId: string
}