import { IBaasicModel } from 'common/contracts';
import { IUser } from 'services/notifications/contracts';

export interface IUserSubscription extends IBaasicModel {
    channel: string,
    user?: IUser,
    userId: string
}