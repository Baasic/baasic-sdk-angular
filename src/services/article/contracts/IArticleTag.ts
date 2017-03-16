import { IBaasicModel } from 'contracts/common';

export interface IArticleTag extends IBaasicModel {
    slug?: string,
    sortOrder?: number,
    tag: string
}