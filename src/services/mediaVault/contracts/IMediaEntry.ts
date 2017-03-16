import { IBaasicModel, IUserInfo } from 'contracts/common';
import { IMediaVaultDerivedEntry } from 'contracts/mediaVault';

export interface IMediaEntry extends IBaasicModel {
    derivedEntries?: IMediaVaultDerivedEntry[],
    description?: string,
    fileExtensions?: string,
    fileName?: string,
    fileSize?: number,
    height?: number,
    metaData?: Object,
    ownerUser?: IUserInfo,
    ownerUserId?: string,
    path: string,
    width?: number
}