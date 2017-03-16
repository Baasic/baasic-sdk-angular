import { IBaasicModel } from 'common/contracts';
import { IArticle, IArticleCommentMetadata } from 'contracts/article';

export interface IArticleComment extends IBaasicModel, IArticleCommentMetadata {
    article?: IArticle,
    articleId: string,
    comment?: string
}