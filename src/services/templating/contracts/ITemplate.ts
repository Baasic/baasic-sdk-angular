import { IBaasicModel } from 'contracts/common';

export interface ITemplate extends IBaasicModel {
    type?: Object,
    isBuiltin?: boolean,
    isOverridden?: boolean,
    moduleName?: string,
    templateId: string,
    provider?: string
}