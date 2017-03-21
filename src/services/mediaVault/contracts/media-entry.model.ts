import { IBaasicModel, IUserInfo } from 'infrastructure/common/contracts';
import { IMediaVaultDerivedEntry } from 'services/mediaVault/contracts';

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