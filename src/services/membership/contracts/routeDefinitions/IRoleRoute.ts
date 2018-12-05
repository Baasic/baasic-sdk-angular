import { IRoleBatchRoute } from '.';
import { IOptions, IRole, IBaseRoute } from '../../../..';

export interface IRoleRoute extends IBaseRoute {
    findRoute: string;
    getRoute: string;
    createRoute: string;
    updateRoute: string;
    removeRoute: string;
    batch: IRoleBatchRoute;
    find(options: IOptions): any;
    get(id: string, options?: IOptions): any;
    create(): any;
    update(data: IRole): any;
    delete(data: IRole): any;
}