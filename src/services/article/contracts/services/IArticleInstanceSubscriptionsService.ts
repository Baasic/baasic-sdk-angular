import {
    IArticleInstanceSubscriptionsCommentReportedService,
    IArticleInstanceSubscriptionsArticleService,
    IArticleInstanceSubscriptionsCommentRequiresModerationService
} from 'contracts/article';

export interface IArticleInstanceSubscriptionsService {
    commentReported: IArticleInstanceSubscriptionsCommentReportedService,
    article: IArticleInstanceSubscriptionsArticleService,
    commentRequiresModeration: IArticleInstanceSubscriptionsCommentRequiresModerationService
}