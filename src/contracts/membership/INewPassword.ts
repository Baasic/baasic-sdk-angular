import { IBaasicModel } from 'contracts/common';

export interface INewPassword extends IBaasicModel {
    newPassword: string,
    sendEmailNotification?: boolean,
    siteUrl?: string
}