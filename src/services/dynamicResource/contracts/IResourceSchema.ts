import { IBaasicModel } from 'contracts/common;
import { IOwner } from 'contracts/dynamicResource';

export interface IResourceSchema extends IBaasicModel {
    description?: string,
    enforceSchemaValidation?: boolean,
    name: string,
    owner?: IOwner,
    ownerId?: string,
    schema: any
}