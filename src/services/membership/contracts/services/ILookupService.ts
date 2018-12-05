import { IGetRequestOptions, IHttpResponse } from '../../../../infrastructure/common/contracts';
import { ILookup } from '../';
import { ILookupRoute } from '../routeDefinitions';

export interface ILookupService {
    routeDefinition: ILookupRoute;
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<ILookup>>;
}