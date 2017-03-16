import { IBaasicModel } from 'common/contracts';
import { IFileEntry } from 'contracts/userProfile';

export interface IProfileAvatar extends IBaasicModel {
    avatarFileEntry?: IFileEntry,
    avatarFileEntryId?: string
}