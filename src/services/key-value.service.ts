import { Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptionsArgs, Response } from '@angular/http';
import { BaasicApp } from 'index'
import { KeyValue  } from 'baasic-sdk-core'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class KeyValueService
{
    private readonly client: KeyValue.BaasicKeyValueClient;
    constructor (private baasicApp: BaasicApp) {
        this.client = baasicApp.keyValue;
    }

    get(id: string) {
        return this.client.get()
    }
};