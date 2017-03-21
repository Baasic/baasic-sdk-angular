import {
    ICommerceLookupsAddressTypeService,
    ICommerceLookupsCountryService,
    ICommerceLookupsCountryStateService,
    ICommerceLookupsPaymentMethodService,
    ICommerceLookupsPaymentTransactionStatusService,
    ICommerceLookupsRecurringCyclePeriodTypeService,
    ICommerceLookupsSubscriptionStatusService,
    ICommerceLookupsInvoiceStatusService
} from 'services/commerce/contracts';

export interface ICommerceLookups {
    addressTypes: ICommerceLookupsAddressTypeService;
    countries: ICommerceLookupsCountryService;
    countryStates: ICommerceLookupsCountryStateService;
    paymentMethods: ICommerceLookupsPaymentMethodService;
    paymentTransactionStatuses: ICommerceLookupsPaymentTransactionStatusService;
    recurringCyclePeriodTypes: ICommerceLookupsRecurringCyclePeriodTypeService;
    subscriptionStatuses: ICommerceLookupsSubscriptionStatusService;
    invoiceStatuses: ICommerceLookupsInvoiceStatusService;
}