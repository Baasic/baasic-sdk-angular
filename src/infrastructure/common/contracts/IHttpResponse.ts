import { IHttpHeaders, IHttpRequest } from 'infrastructure/common/contracts';

export interface IHttpResponse<ReturnType> {
    request: IHttpRequest,
    headers: IHttpHeaders,
    statusCode: number,
    statusText: string,
    data: ReturnType

}