import { IBaasicModel } from 'contracts/common';

export interface IAccessSection extends IBaasicModel {
    abrv?: string,
    description?: string,
    name?: string
}