import { IBaasicModel } from 'contracts/common;

export interface IKeyValue extends IBaasicModel {
    key: string,
    value: string
}