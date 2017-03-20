import { IValueSetItem } from 'services/valueSet/contracts';
import { IBaasicModel } from 'infrastructure/common/contracts';

export interface IValueSet extends IBaasicModel {
    values?: IValueSetItem[],
    description?: string,
    name: string
}