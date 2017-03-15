import { IHttpResponse } from 'contracts/common';
import { ICompany } from 'contracts/userProfile';

export interface ICompanyBatchService {
    create(data: ICompany[]): PromiseLike<IHttpResponse<any>>;
    update(data: ICompany[]): PromiseLike<IHttpResponse<any>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<any>>;
}