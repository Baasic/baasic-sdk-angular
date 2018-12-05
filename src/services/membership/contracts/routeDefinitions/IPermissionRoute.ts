import { IAccessPolicy } from 'services';
import { IBaseRoute } from '../../../..';

export interface IPermissionRoute extends IBaseRoute {
    findRoute: string;
    getActionsRoute: string;
    getRolesRoute: string;
    getUsersRoute: string;
    createRoute: string;
    removeRoute: string;
    find(section: string, options?: any): any;
    getActions(options?: any): any;
    getRoles(options?: any): any;
    getUsers(options?: any): any;
    create(): any;
    remove(data: IAccessPolicy): any;
}