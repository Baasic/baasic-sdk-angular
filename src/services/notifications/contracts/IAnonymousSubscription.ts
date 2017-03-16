import { IBaasicModel } from 'common/contracts';
import { IAnonymousRegistration } from 'contracts/notifications';

export interface IAnonymousSubscription extends IBaasicModel {
    channel: string,
    registration?: IAnonymousRegistration,
    registrationId: string
}