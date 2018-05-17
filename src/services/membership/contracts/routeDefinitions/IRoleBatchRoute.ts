import { IBaseRoute } from '../../../..';

export interface IRoleBatchRoute extends IBaseRoute {
    createRoute: string;
    updateRoute: string;
    removeRoute: string;
    create(): any;
    update(): any;
    delete(): any;
}