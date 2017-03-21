import { IBaasicModel } from 'infrastructure/common/contracts';

export interface IUserInfo extends IBaasicModel {
    displayName?: string
}