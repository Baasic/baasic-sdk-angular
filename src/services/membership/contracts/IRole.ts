import { IBaasicModel } from 'contracts/common';

export interface IRole extends IBaasicModel {
    description?: string,
    name: string
}