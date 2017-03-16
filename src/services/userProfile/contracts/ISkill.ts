import { IBaasicModel } from 'contracts/common';

export interface ISkill extends IBaasicModel {
    description?: string,
    name: string,
    slug?: string
}