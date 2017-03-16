import { IBaasicModel } from 'contracts/common';

export interface IUserSocialLogin extends IBaasicModel {
    abrv: string,
    isConfigured: boolean,
    isConnected: boolean,
    name: string
}