import { IBaasicModel } from 'common/contracts';
import { IArticle, IAuthor } from 'contracts/article';

export interface IRating extends IBaasicModel {
    article?: IArticle,
    articleId: string,
    ratedOn?: string,
    rating: number,
    user?: IAuthor,
    userId: string
} 