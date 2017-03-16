import { IACLService, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import {
    IArticle,
    IArticleInstanceCommentsService,
    IArticleInstanceFilesService,
    IArticleInstanceRatingsService,
    IArticleInstanceSubscriptionsService,
    IArticleInstanceTagsService,
    IArticleOptions
} from 'services/article/contracts';

export interface IArticleInstanceService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticle>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticle>>;
    create(data: IArticle): PromiseLike<IHttpResponse<IArticle>>;
    update(data: IArticle): PromiseLike<IHttpResponse<void>>;
    saveDraft(data: IArticle): PromiseLike<IHttpResponse<any>>;
    remove(data: IArticle): PromiseLike<IHttpResponse<void>>;
    archive(data: IArticle, options: IArticleOptions): PromiseLike<IHttpResponse<void>>;
    restore(data: IArticle): PromiseLike<IHttpResponse<void>>;
    unpublish(data: IArticle): PromiseLike<IHttpResponse<void>>;
    publish(data: IArticle, articleOptions: IArticleOptions): PromiseLike<IHttpResponse<void>>;
    purge(options: Object): PromiseLike<IHttpResponse<void>>;
    comments: IArticleInstanceCommentsService,
    files: IArticleInstanceFilesService,
    ratings: IArticleInstanceRatingsService,
    subscriptions: IArticleInstanceSubscriptionsService,
    tags: IArticleInstanceTagsService,
    acl: IACLService
}