import { IHttpResponse } from 'contracts/common';
import { INotification, INotificationsPublishBatchService } from 'contracts/notifications';

export interface INotificationsPublishService {
    create(data: INotification): PromiseLike<IHttpResponse<INotification>>;
    batch: INotificationsPublishBatchService;
}