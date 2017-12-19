import {
    ICommerceLookupsAddressTypeService,
    ICommerceLookupsCountryService,
    ICommerceLookupsCountryStateService,
    ICommerceLookupsPaymentMethodService,
    ICommerceLookupsPaymentTransactionStatusService,
    ICommerceLookupsRecurringCyclePeriodTypeService,
    ICommerceLookupsSubscriptionStatusService,
    ICommerceLookupsInvoiceStatusService,
    ICommerceLookupsCouponTypeService
} from '../../';

export interface ICommerceLookups {
    addressTypes: ICommerceLookupsAddressTypeService;
    countries: ICommerceLookupsCountryService;
    countryStates: ICommerceLookupsCountryStateService;
    paymentMethods: ICommerceLookupsPaymentMethodService;
    paymentTransactionStatuses: ICommerceLookupsPaymentTransactionStatusService;
    recurringCyclePeriodTypes: ICommerceLookupsRecurringCyclePeriodTypeService;
    subscriptionStatuses: ICommerceLookupsSubscriptionStatusService;
    invoiceStatuses: ICommerceLookupsInvoiceStatusService;
    couponTypes: ICommerceLookupsCouponTypeService;
}