import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IRating } from 'contracts/article';

export interface IArticleRatingsService {
    create(data: IRating): PromiseLike<IHttpResponse<IRating>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>>;
    findByUser(username: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRating>>;
    update(data: IRating): PromiseLike<IHttpResponse<void>>;
    remove(data: IRating): PromiseLike<IHttpResponse<void>>;
}