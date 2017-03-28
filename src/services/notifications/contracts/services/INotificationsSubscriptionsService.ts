import { INotificationsSubscriptionsAnonymousService, INotificationsSubscriptionsUsersService } from '../';

export interface INotificationsSubscriptionsService {
    anonymous: INotificationsSubscriptionsAnonymousService;
    users: INotificationsSubscriptionsUsersService;
}