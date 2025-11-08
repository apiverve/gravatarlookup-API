declare module '@apiverve/gravatarlookup' {
  export interface gravatarlookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface gravatarlookupResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class gravatarlookupWrapper {
    constructor(options: gravatarlookupOptions);

    execute(callback: (error: any, data: gravatarlookupResponse | null) => void): Promise<gravatarlookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: gravatarlookupResponse | null) => void): Promise<gravatarlookupResponse>;
    execute(query?: Record<string, any>): Promise<gravatarlookupResponse>;
  }
}
