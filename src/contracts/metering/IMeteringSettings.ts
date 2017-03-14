import { IBaasicModel } from 'contracts/common';

export interface IMeteringSettings extends IBaasicModel {
    dataRetentionPerion: number
}