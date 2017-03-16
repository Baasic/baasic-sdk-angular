import { IBaasicModel } from 'contracts/common';

export interface IMediaVaultSettings extends IBaasicModel {
    derivedItemCount: number,
    uploadAllowedExtensions: string
}