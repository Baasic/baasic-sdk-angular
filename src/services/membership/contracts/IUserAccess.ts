import { IRole } from 'contracts/membership';

export interface IUserAccess {
    isApproved?: boolean,
    isLockedOut?: boolean,
    roles?: IRole[]
}