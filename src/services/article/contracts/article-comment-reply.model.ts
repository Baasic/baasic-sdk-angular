import { IBaasicModel } from 'infrastructure/common/contracts';
import { IArticleComment, IArticleCommentMetadata } from 'services/article/contracts';

export interface IArticleCommentReply extends IBaasicModel, IArticleCommentMetadata {
    comment?: IArticleComment,
    commentId?: string,
    reply: string
}