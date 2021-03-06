import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { INotification, INotificationsPublishBatchService } from '../';

export interface INotificationsPublishService {
    create(data: INotification): PromiseLike<IHttpResponse<INotification>>;
    batch: INotificationsPublishBatchService;
}