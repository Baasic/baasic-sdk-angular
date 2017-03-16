import { IValueSetItem } from 'contracts/valueSet';
import { IBaasicModel } from 'contracts/common';

export interface IValueSet extends IBaasicModel {
    values?: IValueSetItem[],
    description?: string,
    name: string
}