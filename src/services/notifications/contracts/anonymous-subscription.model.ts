import { IBaasicModel } from 'infrastructure/common/contracts';
import { IAnonymousRegistration } from 'services/notifications/contracts';

export interface IAnonymousSubscription extends IBaasicModel {
    channel: string,
    registration?: IAnonymousRegistration,
    registrationId: string
}