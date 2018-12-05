import { Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { IHttpClient, IHttpRequest, IHttpResponse, IHttpHeaders } from 'baasic-sdk-javascript'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpClientFactory implements IHttpClient {
    constructor(private http: Http) { }

    createPromise<TData>(deferFn: (resolve: (TData) => void, reject: (any) => void) => void): PromiseLike<TData> {
        return new Promise<TData>(deferFn);
    }

    request<ResponseType>(request: IHttpRequest) {
        let httpRequest: RequestOptionsArgs = {
            withCredentials: true,
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
                    data: safelyConvertToJSON<ResponseType>(response)
                };
            })
            .catch((response: Response | any) => {
                if (response instanceof Response) {
                    return Observable.throw(<IHttpResponse<ResponseType>>{
                        request: request,
                        statusCode: response.status,
                        statusText: response.statusText,
                        headers: response.headers.toJSON(),
                        data: safelyConvertToJSON<ResponseType>(response)
                    });
                } else {
                    Observable.throw(response);
                }
            })
            .toPromise();

        function safelyConvertToJSON<T>(response: Response): T {
            // json() function call fails when trying to convert empty string ''
            // In that case catch exception and return null.
            try {                
                return <T>response.json();
            } catch (err) {
                 return null;
            }
        }
    };
};