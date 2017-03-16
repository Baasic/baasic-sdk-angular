import { IHttpResponse } from 'common/contracts';
import { INotification } from 'contracts/notifications';

export interface INotificationsPublishBatchService {
    create(data: INotification[]): PromiseLike<IHttpResponse<INotification[]>>;
}