import { IBaasicModel } from 'contracts/common';
import { IFileEntryMetadata, IPolicy } from 'contracts/files';

export interface IFileEntry extends IBaasicModel, IFileEntryMetadata {
    policies?: IPolicy[]
}