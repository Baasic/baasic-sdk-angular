import { IBaasicModel } from 'common/contracts';
import { IArticleFileEntry } from 'contracts/article';

export interface IArticleFile extends IBaasicModel {
    articleFileEntry?: IArticleFileEntry,
    articleFileEntryId?: string,
    articleId?: string
}