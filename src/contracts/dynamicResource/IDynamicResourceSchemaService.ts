import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';
import { IResourceSchema } from 'contracts/dynamicResource';

export interface IDynamicResourceSchemaService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IResourceSchema>>>;
    get(name: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IResourceSchema>>;
    create(data: IResourceSchema): PromiseLike<IHttpResponse<IResourceSchema>>;
    update(data: IResourceSchema): PromiseLike<IHttpResponse<void>>;
    remove(data: IResourceSchema): PromiseLike<IHttpResponse<void>>;
    generate(data: any): PromiseLike<IHttpResponse<any>>;
}