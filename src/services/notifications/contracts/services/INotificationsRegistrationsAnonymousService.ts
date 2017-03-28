import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IAnonymousRegistration, INotificationsRegistrationsAnonymousBatchService } from '../';

export interface INotificationsRegistrationsAnonymousService {
    create(data: IAnonymousRegistration): PromiseLike<IHttpResponse<IAnonymousRegistration>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IAnonymousRegistration>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IAnonymousRegistration>>;
    remove(data: IAnonymousRegistration): PromiseLike<IHttpResponse<void>>;
    update(data: IAnonymousRegistration): PromiseLike<IHttpResponse<void>>;
    batch: INotificationsRegistrationsAnonymousBatchService;
}