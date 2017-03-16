import { IBaasicModel } from 'contracts/common';
import { IArticle, IArticleCommentMetadata } from 'contracts/article';

export interface IArticleComment extends IBaasicModel, IArticleCommentMetadata {
    article?: IArticle,
    articleId: string,
    comment?: string
}