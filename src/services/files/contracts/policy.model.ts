import { IBaasicModel } from 'infrastructure/common/contracts';

export interface IPolicy extends IBaasicModel {
    action: string,
    roleId?: string,
    roleName?: string,
    userId?: string,
    userName?: string
}