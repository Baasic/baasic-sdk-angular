import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IAvatarFileEntry } from './';

export interface IProfileAvatar extends IBaasicModel {
    avatarFileEntry?: IAvatarFileEntry,
    avatarFileEntryId?: string
}