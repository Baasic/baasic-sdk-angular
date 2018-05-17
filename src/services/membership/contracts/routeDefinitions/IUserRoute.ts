import { IUserSocialLoginRoute } from '.';
import { IOptions, IAppUser, IBaseRoute } from '../../../..';

export interface IUserRoute extends IBaseRoute {
    findRoute: string;
    getRoute: string;
    createRoute: string;
    updateRoute: string;
    deleteRoute: string;   
    existsRoute: string;
    changePasswordRoute: string;
    unlockRoute: string;
    lockRoute: string;
    approveRoute: string;
    disapproveRoute: string;
    socialLogin: IUserSocialLoginRoute;
    find(options: IOptions): any;
    get(id: string, options?: IOptions): any;
    create(): any;
    update(data: IAppUser): any;
    delete(data: IAppUser): any;
    exists(username: string, options?: any): any;
    changePassword(username: string): any;
    unlock(data: IAppUser): any;
    lock(data: IAppUser): any;
    approve(data: IAppUser): any;
    disapprove(data: IAppUser): any;
}