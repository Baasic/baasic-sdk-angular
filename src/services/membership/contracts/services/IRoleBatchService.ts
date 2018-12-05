import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IRole } from '../';
import { IRoleBatchRoute } from '../routeDefinitions';

export interface IRoleBatchService {
    routeDefinition: IRoleBatchRoute;
    create(data: IRole[]): PromiseLike<IHttpResponse<IRole[]>>;
    update(data: IRole[]): PromiseLike<IHttpResponse<void>>;
    remove(data: IRole[]): PromiseLike<IHttpResponse<void>>;
}