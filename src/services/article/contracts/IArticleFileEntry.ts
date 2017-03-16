import { IBaasicModel } from 'common/contracts';
import { IFileEntryMetadata } from 'contracts/article';

export interface IArticleFileEntry extends IBaasicModel, IFileEntryMetadata {
    articleId?: string,
    parentId?: string
}