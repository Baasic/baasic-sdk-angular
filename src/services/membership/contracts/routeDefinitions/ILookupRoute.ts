import { IBaseRoute } from '../../../..';

export interface ILookupRoute extends IBaseRoute {
    getRoute: string;
    get(data: any): any;    
}