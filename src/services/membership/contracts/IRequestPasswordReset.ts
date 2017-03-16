import { IBaasicModel } from 'contracts/common';

export interface IRequestPasswordReset extends IBaasicModel {
    challengeIdentifier?: string,
    challengeResponse?: string,
    recoverUrl: string,
    userName: string
}