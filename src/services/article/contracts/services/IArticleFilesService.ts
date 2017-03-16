import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IArticleFile, IArticleFilesBatchService, IArticleFilesStreamsService } from 'contracts/article';

export interface IArticleFilesService {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleFile>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleFile>>;
    unlink(data: IArticleFile, options: Object): PromiseLike<IHttpResponse<void>>;
    update(data: IArticleFile): PromiseLike<IHttpResponse<void>>;
    link(data: IArticleFile): PromiseLike<IHttpResponse<IArticleFile>>;
    batch: IArticleFilesBatchService;
    streams: IArticleFilesStreamsService;
}