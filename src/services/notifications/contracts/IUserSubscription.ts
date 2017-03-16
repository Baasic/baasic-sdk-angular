import { IBaasicModel } from 'common/contracts';
import { IUser } from 'contracts/notifications';

export interface IUserSubscription extends IBaasicModel {
    channel: string,
    user?: IUser,
    userId: string
}