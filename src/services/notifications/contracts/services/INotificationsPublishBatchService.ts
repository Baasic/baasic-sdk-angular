import { IHttpResponse } from 'common/contracts';
import { INotification } from 'services/notifications/contracts';

export interface INotificationsPublishBatchService {
    create(data: INotification[]): PromiseLike<IHttpResponse<INotification[]>>;
}