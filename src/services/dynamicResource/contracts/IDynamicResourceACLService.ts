import { IACLPolicy, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IDynamicACLOptions } from 'contracts/dynamicResource';


export interface IDynamicResourceACLService {
    get(options: IDynamicACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>>;
    update(options: IDynamicACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>>;
    removeByUser(action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>>;
    removeByRole(action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>>;
}