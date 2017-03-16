import { IBaasicModel } from 'contracts/common';

export interface IOrganization extends IBaasicModel {
    description?: string,
    name: string,
    slug?: string
}