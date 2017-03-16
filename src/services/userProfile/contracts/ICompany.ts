import { IBaasicModel } from 'contracts/common';

export interface ICompany extends IBaasicModel {
    description?: string,
    name: string,
    slug?: string
}