import { IBaasicModel } from 'infrastructure/common/contracts';
import { IArticleFileEntryMetadata } from 'services/article/contracts';

export interface IArticleFileEntry extends IBaasicModel, IArticleFileEntryMetadata {
    articleId?: string,
    parentId?: string
}