import { INotificationsSubscriptionsAnonymousService, INotificationsSubscriptionsUsersService } from 'services/notifications/contracts';

export interface INotificationsSubscriptionsService {
    anonymous: INotificationsSubscriptionsAnonymousService;
    users: INotificationsSubscriptionsUsersService;
}