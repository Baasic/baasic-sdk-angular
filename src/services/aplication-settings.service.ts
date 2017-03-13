import { Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptionsArgs, Response } from '@angular/http';
import { BaasicApp } from 'index'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from 'contracts/common';

import { IApplication } from 'contracts/common';

@Injectable()
export class ApplicationSettingsService {

    constructor(private baasicApp: BaasicApp) { }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the application settings resource.                 
     * @method
     * @param options Query resource options object.                        
     * @example ApplicationSettingsService.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(options: IOptions): PromiseLike<IHttpResponse<IApplication>> {
        return this.baasicApp.applicationSettingsModule.get(options);
    }

    /**                  
     * Returns a promise that is resolved once the update application settings action has been performed. This action updates the application setting resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't use `baasicApplicationSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(appSettings); 
     * let uri = params['model'].links('put').href;				 
     * ```                  
     * @method
     * @param data An application object used to update application settings of the specified application resource.                         
     * @example // appSettings is a resource previously fetched using get action. 
                    appSettings.allowAnyOrigin = true; 
                    ApplicationSettingsService.update(appSettings)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IApplication): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.applicationSettingsModule.update(data);
    }
}