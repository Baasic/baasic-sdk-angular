import { IBaseRoute } from '../../../..';

export interface ILoginRoute extends IBaseRoute {
    loginRoute: string;
    login(options: any): any;
}