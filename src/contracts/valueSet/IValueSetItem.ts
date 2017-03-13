import { IBaasicModel } from 'contracts/common';

export interface IValueSetItem extends IBaasicModel {
    setId?: string,
    setName?: string,
    value: string
}