import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IValueSetItem } from 'services/valueSet/contracts';

export interface IValueSetItemService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IValueSetItem>>>;
    get(setName: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IValueSetItem>>;
    create(data: IValueSetItem): PromiseLike<IHttpResponse<IValueSetItem>>;
    update(data: IValueSetItem): PromiseLike<IHttpResponse<IValueSetItem>>
    remove(data: IValueSetItem): PromiseLike<IHttpResponse<void>>
}