import { IBaasicModel } from 'infrastructure/common/contracts';
import { IFileEntry } from 'services/userProfile/contracts';

export interface IProfileAvatar extends IBaasicModel {
    avatarFileEntry?: IFileEntry,
    avatarFileEntryId?: string
}