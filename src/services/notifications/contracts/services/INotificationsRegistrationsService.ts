import { INotificationsRegistrationsAnonymousService, INotificationsRegistrationsUsersService } from 'services/notifications/contracts';

export interface INotificationsRegistrationsService {
    anonymous: INotificationsRegistrationsAnonymousService;
    users: INotificationsRegistrationsUsersService;
}