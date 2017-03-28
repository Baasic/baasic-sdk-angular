import { INotificationsRegistrationsAnonymousService, INotificationsRegistrationsUsersService } from '../';

export interface INotificationsRegistrationsService {
    anonymous: INotificationsRegistrationsAnonymousService;
    users: INotificationsRegistrationsUsersService;
}