import { IBaasicModel } from 'infrastructure/common/contracts';
import { IAppUser, IUserIdentity } from 'services/membership/contracts';

export interface INewUser extends IBaasicModel, IAppUser, IUserIdentity {
    autoCreatedPassword?: boolean,
    confirmPassword: string,
    password: string,
    mailUrl?: string,
    sendEmailNotification?: boolean,
    allowDashboardAccess?: boolean
}