import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';
import { IValueSetItem } from 'contracts/valueSet';

export interface IValueSetItemService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IValueSetItem>>>;
    get(setName: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IValueSetItem>>;
    create(data: IValueSetItem): PromiseLike<IHttpResponse<IValueSetItem>>;
    update(data: IValueSetItem): PromiseLike<IHttpResponse<IValueSetItem>>
    remove(data: IValueSetItem): PromiseLike<IHttpResponse<void>>
}