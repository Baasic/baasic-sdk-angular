import { IBaseRoute } from '../../../..';

export interface IPasswordRecoveryRoute extends IBaseRoute {
    passwordRecoveryRoute: string;
    passwordRecovery(): any;
}