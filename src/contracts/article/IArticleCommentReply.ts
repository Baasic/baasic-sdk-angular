import { IBaasicModel } from 'contracts/common';
import { IArticleComment, IArticleCommentMetadata } from 'contracts/article';

export interface IArticleCommentReply extends IBaasicModel, IArticleCommentMetadata {
    comment?: IArticleComment,
    commentId?: string,
    reply: string
}