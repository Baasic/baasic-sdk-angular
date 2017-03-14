import { IBaasicModel } from 'contracts/common';
import { IUserAccess, IUserIdentity, IRole } from 'contracts/membership';

export interface IAppUser extends IBaasicModel, IUserAccess, IUserIdentity {
    creationDate?: string,
    dashboardSettings?: any,
    name?: string
}