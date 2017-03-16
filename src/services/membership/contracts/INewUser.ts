import { IBaasicModel } from 'common/contracts';
import { IAppUser, IUserIdentity } from 'contracts/membership';

export interface INewUser extends IBaasicModel, IAppUser, IUserIdentity {
    autoCreatedPassword?: boolean,
    confirmPassword: string,
    password: string,
    mailUrl?: string,
    sendEmailNotification?: boolean,
    allowDashboardAccess?: boolean
}