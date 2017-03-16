import { IHttpResponse } from 'contracts/common';
import { INotification } from 'contracts/notifications';

export interface INotificationsPublishBatchService {
    create(data: INotification[]): PromiseLike<IHttpResponse<INotification[]>>;
}