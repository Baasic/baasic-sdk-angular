import { IBaasicModel } from 'contracts/common';

export interface IAnonymousRegistration extends IBaasicModel {
    expirationDate?: string,
    provider: string,
    providerData: Object
}