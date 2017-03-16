import { IHttpHeaders } from 'common/contracts';

export interface IHttpRequest {
    headers?: IHttpHeaders,
    url: URL,
    method: string
    data?: any;
}