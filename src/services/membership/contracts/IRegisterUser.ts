import { IBaasicModel } from 'common/contracts';
import { IUserIdentity } from 'services/membership/contracts';

export interface IRegisterUser extends IBaasicModel, IUserIdentity {
    activationUrl?: string,
    challengeIdentifier?: string,
    challengeResponse?: string,
    confirmPassword: string,
    password: string
}