import { IHttpHeaders, IHttpRequest } from 'common/contracts';

export interface IHttpResponse<ReturnType> {
    request: IHttpRequest,
    headers: IHttpHeaders,
    statusCode: number,
    statusText: string,
    data: ReturnType

}