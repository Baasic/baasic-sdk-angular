import { IBaasicModel } from 'infrastructure/common/contracts';

export interface ISkill extends IBaasicModel {
    description?: string,
    name: string,
    slug?: string
}