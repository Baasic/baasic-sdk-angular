import { IBaasicModel } from 'contracts/common';

export interface IPreprocessingProviderSettings extends IBaasicModel {
    abrv: string,
    name: string
}