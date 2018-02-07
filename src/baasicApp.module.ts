import { NgModule, Injectable, Inject, ModuleWithProviders } from '@angular/core';
import { IBaasicOptions } from 'baasic-sdk-javascript';
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
    ValueSetService,
    BaasicAppService,
    TYPES
} from './services';

@NgModule({
    providers: [
        HttpClientFactory,
        BaasicAppService,
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
export class BaasicApp {
    static forRoot(apiKey: string, options?: Partial<IBaasicOptions>): ModuleWithProviders {
        return {
            ngModule: BaasicApp,
            providers: [{
                provide: TYPES.Configuration,
                useValue: {
                    options: options,
                    apiKey: apiKey
                }
            }]
        };
    }

    constructor() {
    }
};

