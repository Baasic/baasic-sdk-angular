import { IBaasicModel } from 'common/contracts';
import { IFileEntryMetadata, IPolicy } from 'contracts/files';

export interface IFileEntry extends IBaasicModel, IFileEntryMetadata {
    policies?: IPolicy[]
}