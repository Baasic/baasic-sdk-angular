import {
    IArticleInstanceSubscriptionsCommentReportedService,
    IArticleInstanceSubscriptionsArticleService,
    IArticleInstanceSubscriptionsCommentRequiresModerationService
} from '../';

export interface IArticleInstanceSubscriptionsService {
    commentReported: IArticleInstanceSubscriptionsCommentReportedService,
    article: IArticleInstanceSubscriptionsArticleService,
    commentRequiresModeration: IArticleInstanceSubscriptionsCommentRequiresModerationService
}