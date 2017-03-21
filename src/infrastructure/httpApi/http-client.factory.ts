import { Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { IHttpClient, IHttpRequest, IHttpResponse, IHttpHeaders } from 'baasic-sdk-javascript'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClientFactory {
    constructor(private http: Http) { }

    get(): IHttpClient {
        return {
            createPromise: this.createPromise,
            request: this.httpClient
        };
    }

    private createPromise<TData>(deferFn: (resolve: (TData) => void, reject: (any) => void) => void): PromiseLike<TData> {
        return new Promise<TData>(deferFn);
    }

    private httpClient<ResponseType>(request: IHttpRequest) {
        let httpRequest: RequestOptionsArgs = {
            method: request.method,
        };

        if (request.headers) httpRequest.headers = new Headers(request.headers);
        if (request.data) httpRequest.body = request.data;

        return this.http.request(request.url.toString(), httpRequest)
            .map(response => {
                return <IHttpResponse<ResponseType>>{
                    request: request,
                    statusCode: response.status,
                    statusText: response.statusText,
                    headers: response.headers.toJSON(),
                    data: <ResponseType>response.json()
                };
            })
            .catch((response: Response | any) => {
                if (response instanceof Response) {
                    return Observable.throw(<IHttpResponse<ResponseType>>{
                        request: request,
                        statusCode: response.status,
                        statusText: response.statusText,
                        headers: response.headers.toJSON(),
                        data: response.json()
                    });
                } else {
                    Observable.throw(response);
                }
            })
            .toPromise();
    };
};