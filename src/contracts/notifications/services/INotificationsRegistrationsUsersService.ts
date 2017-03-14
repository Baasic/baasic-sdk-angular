import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';
import { IUserRegistration, INotificationsRegistrationsUsersBatchService } from 'contracts/notifications';

export interface INotificationsRegistrationsUsersService {
    create(data: IUserRegistration): PromiseLike<IHttpResponse<IUserRegistration>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserRegistration>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserRegistration>>;
    remove(data: IUserRegistration): PromiseLike<IHttpResponse<void>>;
    update(data: IUserRegistration): PromiseLike<IHttpResponse<void>>;
    batch: INotificationsRegistrationsUsersBatchService;
}