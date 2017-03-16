import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'common/contracts';
import { IAnonymousRegistration, INotificationsRegistrationsAnonymousBatchService } from 'services/notifications/contracts';

export interface INotificationsRegistrationsAnonymousService {
    create(data: IAnonymousRegistration): PromiseLike<IHttpResponse<IAnonymousRegistration>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IAnonymousRegistration>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IAnonymousRegistration>>;
    remove(data: IAnonymousRegistration): PromiseLike<IHttpResponse<void>>;
    update(data: IAnonymousRegistration): PromiseLike<IHttpResponse<void>>;
    batch: INotificationsRegistrationsAnonymousBatchService;
}