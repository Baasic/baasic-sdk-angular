import { IBaasicModel } from 'contracts/common';

export interface ISnProvider extends IBaasicModel {
    abrv?: string,
    hasEmail?: string,
    name?: string
}