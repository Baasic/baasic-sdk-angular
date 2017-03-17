import { IBaasicModel } from 'common/contracts';
import { IUserAccess, IUserIdentity, IRole } from 'services/membership/contracts';

export interface IAppUser extends IBaasicModel, IUserAccess, IUserIdentity {
    creationDate?: string,
    dashboardSettings?: any,
    name?: string
}