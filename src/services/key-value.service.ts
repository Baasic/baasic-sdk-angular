import { Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptionsArgs, Response } from '@angular/http';
import { BaasicApp } from 'index'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class KeyValueService
{
    constructor (private baasicApp: BaasicApp) {}
};