import { IBaasicModel } from 'infrastructure/common/contracts';

export interface IDerivedEntry extends IBaasicModel {
    fileSize?: number,
    height?: number,
    metaData?: Object,
    width?: number,
    fileEntryId?: string
}