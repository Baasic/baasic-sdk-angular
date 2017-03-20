import { IACLOptions, IACLPolicy, IHttpResponse } from 'infrastructure/common/contracts';

export interface IACLService {
    get(options?: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>>;
    update(options: IACLOptions[]): PromiseLike<IHttpResponse<IACLPolicy[]>>;
    removeByUser(id: string, action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>>;
    removeByRole(id: string, action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>>;
}