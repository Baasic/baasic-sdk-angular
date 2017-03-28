import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IRequestPasswordReset extends IBaasicModel {
    challengeIdentifier?: string,
    challengeResponse?: string,
    recoverUrl: string,
    userName: string
}