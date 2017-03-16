import { INotificationsSubscriptionsAnonymousService, INotificationsSubscriptionsUsersService } from 'contracts/notifications';

export interface INotificationsSubscriptionsService {
    anonymous: INotificationsSubscriptionsAnonymousService;
    users: INotificationsSubscriptionsUsersService;
}