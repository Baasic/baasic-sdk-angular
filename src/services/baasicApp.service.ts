import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { IBaasicAppOptions, BaasicApp as SDKBaasicApp } from 'baasic-sdk-javascript';
import { HttpClientFactory } from '../infrastructure/httpApi/http-client.factory';
import { IConfiguration } from '../infrastructure/common/contracts';

const TYPES = {
    Configuration: new OpaqueToken('Configuration')
}
export { TYPES };

@Injectable()
export class BaasicAppService extends SDKBaasicApp {
    constructor( @Inject(TYPES.Configuration) configuration: IConfiguration, httpClientFactory: HttpClientFactory) {
        super(configuration.apiKey, getOptions(configuration.options, httpClientFactory));
    }
};

function getOptions(options: Partial<IBaasicAppOptions>, httpClientFactory: HttpClientFactory): Partial<IBaasicAppOptions> {
    options = options || {};
    if (!options.httpClient) {
        options.httpClient = httpClientFactory.get;
    }

    return options;
}