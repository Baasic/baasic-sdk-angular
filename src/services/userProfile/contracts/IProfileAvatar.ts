import { IBaasicModel } from 'contracts/common';
import { IFileEntry } from 'contracts/userProfile';

export interface IProfileAvatar extends IBaasicModel {
    avatarFileEntry?: IFileEntry,
    avatarFileEntryId?: string
}