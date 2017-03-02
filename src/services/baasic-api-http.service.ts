import { Injectable } from '@angular/core';

@Injectable()
export class BaasicApiHttpService {
    get() {
        console.log('get called.');
    }
}