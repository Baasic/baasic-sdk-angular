import { IAccessAction } from 'contracts/membership';

export interface IAccessPolicy {
    id: string,
    actions: IAccessAction[],
    section: string,
    name: string,
    role: string,
    userName: string
}