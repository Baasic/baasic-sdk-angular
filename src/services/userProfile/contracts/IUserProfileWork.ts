import { IBaasicModel } from 'contracts/common';
import { ICompany } from 'contracts/userProfile';

export interface IUserProfileWork extends IBaasicModel {
    company?: ICompany,
    companyId?: string,
    companyName?: string,
    endDate?: string,
    startDate?: string,
    summary?: string
}