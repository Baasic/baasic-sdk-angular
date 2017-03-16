import { IACL, IACLAction, IACLRole, IACLUser } from 'contracts/common';

export interface IACLPolicy extends IACL {
    action: IACLAction,
    role: IACLRole,
    user: IACLUser,
    embed?: string[]
}