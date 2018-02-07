import { Injectable, Inject, InjectionToken } from '@angular/core';
import { IBaasicOptions, BaasicApp as SDKBaasicApp } from 'baasic-sdk-javascript';
import { HttpClientFactory } from '../infrastructure/httpApi/http-client.factory';
import { IConfiguration } from '../infrastructure/common/contracts';

const TYPES = {
    Configuration: new InjectionToken<BaasicAppService>('Configuration')
}
export { TYPES };

@Injectable()
export class BaasicAppService extends SDKBaasicApp {
    constructor( @Inject(TYPES.Configuration) configuration: IConfiguration, httpClientFactory: HttpClientFactory) {
        super(configuration.apiKey, getOptions(configuration.options, httpClientFactory));
    }
};

function getOptions(options: Partial<IBaasicOptions>, httpClientFactory: HttpClientFactory): Partial<IBaasicOptions> {
    options = options || {};
    if (!options.httpClient) {
        options.httpClient = () => httpClientFactory;
    }

    return options;
};

