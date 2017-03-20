import { IBaasicModel } from 'common/contracts';
import { IFileEntryMetadata, IPolicy } from 'services/files/contracts';

export interface IFileEntry extends IBaasicModel, IFileEntryMetadata {
    policies?: IPolicy[]
}