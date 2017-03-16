import { Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptionsArgs, Response } from '@angular/http';
import { BaasicApp } from 'index'

import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';
import {
    ICustomerService,
    IInvoiceService,
    IPaymentTransaction,
    IProductService
} from 'contracts/commerce';

@Injectable()
export class CommerceService {

    constructor(private baasicApp: BaasicApp) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example CommerceService.find({   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    customerId: '<customer-id>' 
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                     
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>> {
        return this.baasicApp.commerceModule.find(options);
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example CommerceService.get('<id>', {})
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.baasicApp.commerceModule.get(id, options);
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example CommerceService.validateVAT({ countryCode: 'DE', vatId: 'DE999999999' })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    validateVAT(countryCode: string, vatId: string): PromiseLike<IHttpResponse<any>> {
        return this.baasicApp.commerceModule.validateVAT(countryCode, vatId);
    }

    /**                  
     * Returns a promise that is resolved once the subscribe pre-process commerce action has been performed; this action performes pre-subscribe operations such as getting client tokens etc.                  
     * @method                         
     * @example CommerceService.preprocess({   
                    systemName : '<system-name>',   
                    productId : '<product-id>',   
                    customerId: '<id>' 
                }) 
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/
    preprocess(data: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApp.commerceModule.preprocess(data);
    }

    /**                  
     * Returns a promise that is resolved once the subscribe commerce action has been performed; this action creates a new commerce subscription resource.                  
     * @method                         
     * @example CommerceService.subscribe({   
                    systemName : '<system-name>',  
                    productId : '<product-id>',   
                    customer: {     
                        id: '<id>',     
                        firstName: '<first-name>',     
                        lastName: '<last-name>'   
                    }
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/
    subscribe(data: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApp.commerceModule.subscribe(data);
    }

    /**                  
     * Returns a promise that is resolved once the cancel subscription action has been performed. This action will remove a commerce subscription resource from the system if successfully completed. This route obtain routes from `baasicCommerceRouteDefinition` route template. Here is an example of how execute this action:                  
     * @method                         
     * @example	CommerceService.cancel({   
                    systemName: '<system-name>',   
                    id: '<subscription-id>',   
                    requestRefund: <true/false>,   
                    refundAmount: <refund-amount> 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });						
     **/
    cancel(data: any): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.commerceModule.cancel(data);
    }

    get customers(): ICustomerService {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
             * @method                         
             * @example CommerceModule.customers.find({   
                            pageNumber : 1,   
                            pageSize : 10,   
                            orderBy : '<field>',   
                            orderDirection : '<asc|desc>',   
                            search : '<search-phrase>' 
                        })
                        .then(function (collection) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                     
            **/
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>> {
                return baasicApp.commerceModule.customers.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
             * @method                        
             * @example CommerceModule.customers.get(id)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
                return baasicApp.commerceModule.customers.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceCustomerRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = baasicApiClient.removeParams(commerceCustomer); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method                         
             * @example // commerceCustomer is a resource previously fetched using get action. 
                            commerceCustomer.isDefault : true; 
                            CommerceModule.customers.update(commerceCustomer)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				
            **/
            update(data: any): PromiseLike<IHttpResponse<void>> {
                return baasicApp.commerceModule.customers.update(data);
            },

            /**                  
             * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceCustomerRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = baasicApiClient.removeParams(commerceCustomer); 
             * let uri = params['model'].links('delete').href; 
             * ```                  
             * @method                         
             * @example // commerceCustomer is a resource previously fetched using get action.				 
                            CommerceModule.customers.remove(commerceCustomer)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });						
            **/
            remove(data: any): PromiseLike<IHttpResponse<void>> {
                return baasicApp.commerceModule.customers.remove(data);
            },

            paymentMethods: {
                /**                  
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
                 * @method
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed.                          
                 * @example CommerceModule.customers.paymentMethods.find({   
                                pageNumber : 1,   
                                pageSize : 10,   
                                orderBy : '<field>',   
                                orderDirection : '<asc|desc>',   
                                search : '<search-phrase>' 
                            })
                            .then(function (collection) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                     
                **/
                find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>> {
                    return baasicApp.commerceModule.customers.paymentMethods.find(options);
                },


                /**                 
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
                 * @method                        
                 * @example CommerceModule.customers.paymentMethods.get()
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                 
                **/
                get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.commerceModule.customers.paymentMethods.get(id, options);
                },

                /**                  
                 * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceCustomerPaymentMethodRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(commerceCustomerPaymentMethod); 
                 * var uri = params['model'].links('put').href; 
                 * ```                  
                 * @method                         
                 * @example // commerceCustomerPaymentMethod is a resource previously fetched using get action. 
                                    commerceCustomerPaymentMethod.isDefault : true; 
                                    CommerceModule.customers.paymentMethods.update(commerceCustomerPaymentMethod)
                                        .then(function (data) {   
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {   
                                            // perform error handling here 
                                        }); 				
                **/
                update(data: any): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.commerceModule.customers.paymentMethods.update(data);
                },

                /**                 
                 * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resource.                  
                 * @method                         
                 * @example CommerceModule.customers.paymentMethods.create({   
                                paymentMethodNonce : '<payment-method-nonce>',   
                                customerId : '<customer-id>',   
                                typeName : '<type-name>' 
                            })
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                  
                **/
                create(data: any): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.commerceModule.customers.paymentMethods.create(data);
                },

                /**                 
                 * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceCustomerPaymentMethodRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(commerceCustomerPaymentMethod); 
                 * let uri = params['model'].links('delete').href; 
                 * ```                  
                 * @method                         
                 * @example // commerceCustomerPaymentMethod is a resource previously fetched using get action.				 
                                CommerceModule.customers.paymentMethods.remove(commerceCustomerPaymentMethod)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						
                **/
                remove(data: any): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.commerceModule.customers.paymentMethods.remove(data);
                }
            }
        };
    }

    get invoices(): IInvoiceService {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
             * @method                         
             * @example CommerceService.invoices.find({   
                            pageNumber : 1,   
                            pageSize : 10,   
                            orderBy : '<field>',   
                            orderDirection : '<asc|desc>',   
                            search : '<search-phrase>' 
                        }) 
                        .then(function (collection) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                     
            **/
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>> {
                return baasicApp.commerceModule.invoices.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
             * @method                        
             * @example CommerceService.invoices.get()
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
                return baasicApp.commerceModule.invoices.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceInvoiceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(commerceInvoice); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method                         
             * @example // commerceInvoice is a resource previously fetched using get action. 
                            commerceInvoice.invoiceStatusId : '<new-invoice-status-id>'; 
                            CommerceService.invoices.update(commerceInvoice)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				
            **/
            update(data: any): PromiseLike<IHttpResponse<void>> {
                return baasicApp.commerceModule.invoices.update(data);
            },

            /**                  
             * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceInvoiceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(commerceInvoice); 
             * let uri = params['model'].links('delete').href; 
             * ```                  
             * @method                         
             * @example // commerceInvoice is a resource previously fetched using get action.				 
                                CommerceService.invoices.remove(commerceInvoice) 
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						
            **/
            remove(data: any): PromiseLike<IHttpResponse<void>> {
                return baasicApp.commerceModule.invoices.remove(data);
            },

            streams: {
                /**                     
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the invoice stream if successfully completed.                     
                 * @method                         
                 * @example // commerceInvoice is a resource previously fetched using get action.	
                                CommerceService.invoices.streams.get({id: commerceInvoice.id})
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });                                        
                **/
                get(data: any): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.commerceModule.invoices.streams.get(data);
                },

                /**                     
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the invoice stream as a blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
                 * @method                           
                 * @example // Request the original blob                
                                    CommerceService.invoices.streams.getBlobl({id: commerceInvoice.id})
                                        .then(function (data) {     
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {     
                                            // perform error handling here 
                                        });                     
                **/
                getBlob(data: any): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.commerceModule.invoices.streams.getBlob(data);
                }
            }
        };
    }

    get products(): IProductService {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
             * @method                         
             * @example CommerceService.products.find({   
                         pageNumber : 1,   
                         pageSize : 10,   
                         orderBy : '<field>',   
                         orderDirection : '<asc|desc>',   
                         search : '<search-phrase>' 
                     }) 
                     .then(function (collection) {   
                         // perform success action here 
                     },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                    });                     
            **/
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>> {
                return baasicApp.commerceModule.products.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
             * @method                        
             * @example CommerceService.products.get()
                             .then(function (data) {   
                                 // perform success action here 
                             },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                             });                 
         **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
                return baasicApp.commerceModule.products.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resource.                  
             * @method                         
             * @example CommerceService.products.create({   
                            name : '<product-name>',   
                            slug : '<slug>',   
                            shortDescription : '<short-description>',   
                            recurringCyclePeriodTypeId: '<recurring-cycle-period-type-id>'   
                            planId : '<plan-id>',   
                            price: 100,   
                            published: true 
                        }) 
                        .then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                  
            **/
            create(data: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.commerceModule.products.create(data);
            },

            /**                  
             * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceProductRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(commerceProduct); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method                         
             * @example // commerceProduct is a resource previously fetched using get action. 
                                commerceProduct.shortDescription : '<short-description>'; 
                                CommerceService.products.update(commerceProduct)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    }); 				
            **/
            update(data: any): PromiseLike<IHttpResponse<void>> {
                return baasicApp.commerceModule.products.update(data);
            },

            /**                  
             * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceProductRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(commerceProduct);
             * let uri = params['model'].links('delete').href; 
             * ```                  
             * @method                         
             * @example // commerceProduct is a resource previously fetched using get action.				 
                            CommerceService.products.remove(commerceProduct)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });						
            **/
            remove(data: any): PromiseLike<IHttpResponse<void>> {
                return baasicApp.commerceModule.products.remove(data);
            }
        };
    }

    get paymentTransactions(): IPaymentTransaction {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
             * @method                         
             * @example CommerceService.paymentTransactions.find({   
                            pageNumber : 1,   
                            pageSize : 10,   
                            orderBy : '<field>',   
                            orderDirection : '<asc|desc>',   
                            search : '<search-phrase>' 
                        })
                        .then(function (collection) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                     
            **/
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>> {
                return baasicApp.commerceModule.paymentTransactions.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
             * @method                        
             * @example CommerceService.paymentTransactions.get()
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
                return baasicApp.commerceModule.paymentTransactions.get(id, options);
            },

            /**                 
             * Returns a promise that is resolved once the create action has been performed. Success response returns the commerce resource.                 
             * @method                        
             * @example CommerceService.paymentTransactions.create(data)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            create(data: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.commerceModule.paymentTransactions.create(data);
            },

            /**                  
             * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommercePaymentTransactionRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(commercePaymentTransaction); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method                         
             * @example // commercePaymentTransaction is a resource previously fetched using get action. 
                                commercePaymentTransaction.amount : 100; 
                                CommerceService.paymentTransactions.update(commercePaymentTransaction)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    }); 				
            **/
            update(data: any): PromiseLike<IHttpResponse<void>> {
                return baasicApp.commerceModule.paymentTransactions.update(data);
            },

            /**                  
             * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommercePaymentTransactionRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(commercePaymentTransaction); 
             * let uri = params['model'].links('delete').href; 
             * ```                  
             * @method                         
             * @example // commercePaymentTransaction is a resource previously fetched using get action.				 
                                CommerceService.paymentTransactions.remove(commercePaymentTransaction)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						
            **/
            remove(data: any): PromiseLike<IHttpResponse<void>> {
                return baasicApp.commerceModule.paymentTransactions.remove(data);
            }
        };
    }
}