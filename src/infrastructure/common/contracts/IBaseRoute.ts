export interface IBaseRoute {
    createParams(data: any, prop?: string): any;
    updateParams(data: any): any;
    deleteParams(data: any): any;
    deleteBatchParams(data: any[]): string[];
    parse(route: string): any;
}