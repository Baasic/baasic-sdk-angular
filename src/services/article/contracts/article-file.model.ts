import { IBaasicModel } from 'common/contracts';
import { IArticleFileEntry } from 'services/article/contracts';

export interface IArticleFile extends IBaasicModel {
    articleFileEntry?: IArticleFileEntry,
    articleFileEntryId?: string,
    articleId?: string
}