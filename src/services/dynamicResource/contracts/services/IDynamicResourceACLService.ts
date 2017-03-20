import { IACLPolicy, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'infrastructure/common/contracts';
import { IDynamicACLOptions } from 'services/dynamicResource/contracts';


export interface IDynamicResourceACLService {
    get(options: IDynamicACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>>;
    update(options: IDynamicACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>>;
    removeByUser(action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>>;
    removeByRole(action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>>;
}