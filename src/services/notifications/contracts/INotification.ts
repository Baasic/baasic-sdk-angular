import { IBaasicModel } from 'contracts/common';

export interface INotification extends IBaasicModel {
    channels: string[],
    templateContext?: Object,
    templateId: string
}