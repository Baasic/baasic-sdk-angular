import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IUser extends IBaasicModel {
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