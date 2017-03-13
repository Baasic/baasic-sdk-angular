import { IBaasicModel } from 'contracts/common';

export interface IOwner extends IBaasicModel {
    displayName?: string,
    id: string
}