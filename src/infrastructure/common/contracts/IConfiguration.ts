import { IBaasicAppOptions } from 'baasic-sdk-javascript';

export interface IConfiguration {
    apiKey: string,
    options?: Partial<IBaasicAppOptions>
}