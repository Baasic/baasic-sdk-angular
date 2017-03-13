import { IOptions } from 'contracts/common';

export interface IArticleOptions extends IOptions {
    articleUrl?: string,
    startDate?: any,
    endDate?: any
}