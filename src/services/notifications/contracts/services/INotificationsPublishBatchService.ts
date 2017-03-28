import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { INotification } from '../';

export interface INotificationsPublishBatchService {
    create(data: INotification[]): PromiseLike<IHttpResponse<INotification[]>>;
}