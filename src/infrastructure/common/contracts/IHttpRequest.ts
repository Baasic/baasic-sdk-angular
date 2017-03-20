import { IHttpHeaders } from 'infrastructure/common/contracts';

export interface IHttpRequest {
    headers?: IHttpHeaders,
    url: URL,
    method: string
    data?: any;
}