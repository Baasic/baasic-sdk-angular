import { IHttpResponse } from 'common/contracts';
import { INotification, INotificationsPublishBatchService } from 'contracts/notifications';

export interface INotificationsPublishService {
    create(data: INotification): PromiseLike<IHttpResponse<INotification>>;
    batch: INotificationsPublishBatchService;
}