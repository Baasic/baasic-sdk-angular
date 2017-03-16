import { IBaasicModel } from 'contracts/common';
import { IArticleFileEntry } from 'contracts/article';

export interface IArticleFile extends IBaasicModel {
    articleFileEntry?: IArticleFileEntry,
    articleFileEntryId?: string,
    articleId?: string
}