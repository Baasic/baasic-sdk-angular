import { IBaasicModel } from 'infrastructure/common/contracts';
import { IArticle, IAuthor } from 'services/article/contracts';

export interface IRating extends IBaasicModel {
    article?: IArticle,
    articleId: string,
    ratedOn?: string,
    rating: number,
    user?: IAuthor,
    userId: string
} 