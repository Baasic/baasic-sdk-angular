import { IHttpHeaders } from 'contracts/common';

export interface IHttpRequest {
    headers?: IHttpHeaders,
    url: URL,
    method: string
    data?: any;
}