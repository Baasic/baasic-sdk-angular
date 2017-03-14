import { IBaasicModel } from 'contracts/common';

export interface IUserInfo extends IBaasicModel {
    apiKey?: string,
    applicationName?: string,
    isApplicationUser?: boolean,
    displayName?: string,
    email?: string,
    permissions?: any,
    roles?: string[],
    userName?: string,
    dashboardSettings?: any
}