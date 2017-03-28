import { NgModule, Injectable, Inject, OpaqueToken, ModuleWithProviders } from '@angular/core';
import { IBaasicAppOptions, BaasicApp as SDKBaasicApp } from 'baasic-sdk-javascript';
import { HttpClientFactory } from './infrastructure/httpApi/http-client.factory';
import {
    ApplicationSettingsService,
    ArticleService,
    CommerceService,
    DynamicResourceService,
    FilesService,
    KeyValueService,
    MediaVaultService,
    MembershipService,
    MeteringService,
    NotificationsService,
    TemplatingService,
    UserProfileService,
    ValueSetService
} from './services';

let apiKeyToken = new OpaqueToken('ApiKey');
let optionToken = new OpaqueToken('IAppOptions');

@NgModule({
    providers: [
        HttpClientFactory,
        ApplicationSettingsService,
        ArticleService,
        CommerceService,
        DynamicResourceService,
        FilesService,
        KeyValueService,
        MediaVaultService,
        MembershipService,
        MeteringService,
        NotificationsService,
        TemplatingService,
        UserProfileService,
        ValueSetService
    ]
})
export class BaasicApp extends SDKBaasicApp {
    static forRoot(apiKey: string, options?: Partial<IBaasicAppOptions>): ModuleWithProviders {
        return {
            ngModule: BaasicApp,
            providers: [{
                provide: optionToken,
                useValue: options
            }, {
                provide: apiKeyToken,
                useValue: apiKey
            }]
        };
    }

    constructor( @Inject(apiKeyToken) apiKey: string, @Inject(optionToken) options: Partial<IBaasicAppOptions>, httpClientFactory: HttpClientFactory) {
        super(apiKey, getOptions(options, httpClientFactory));
    }
};

function getOptions(options: Partial<IBaasicAppOptions>, httpClientFactory: HttpClientFactory): Partial<IBaasicAppOptions> {
    options = options || {};
    if (!options.httpClient) {
        options.httpClient = httpClientFactory.get;
    }

    return options;
}