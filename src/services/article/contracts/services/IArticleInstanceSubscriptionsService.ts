import {
    IArticleInstanceSubscriptionsCommentReportedService,
    IArticleInstanceSubscriptionsArticleService,
    IArticleInstanceSubscriptionsCommentRequiresModerationService
} from 'services/article/contracts';

export interface IArticleInstanceSubscriptionsService {
    commentReported: IArticleInstanceSubscriptionsCommentReportedService,
    article: IArticleInstanceSubscriptionsArticleService,
    commentRequiresModeration: IArticleInstanceSubscriptionsCommentRequiresModerationService
}