import { IBaasicModel } from 'infrastructure/common/contracts';

export interface IMeteringCategory extends IBaasicModel {
    aggregateFunction: string,
    category: string,
    defaultSamplingRate: string,
    slug?: string,
    unitFactor: number,
    unitName: string,

}