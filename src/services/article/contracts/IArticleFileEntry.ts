import { IBaasicModel } from 'common/contracts';
import { IFileEntryMetadata } from 'services/article/contracts';

export interface IArticleFileEntry extends IBaasicModel, IFileEntryMetadata {
    articleId?: string,
    parentId?: string
}