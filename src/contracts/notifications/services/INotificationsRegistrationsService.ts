import { INotificationsRegistrationsAnonymousService, INotificationsRegistrationsUsersService } from 'contracts/notifications';

export interface INotificationsRegistrationsService {
    anonymous: INotificationsRegistrationsAnonymousService;
    users: INotificationsRegistrationsUsersService;
}