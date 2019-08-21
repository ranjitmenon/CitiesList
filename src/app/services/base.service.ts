import { Injectable, Injector } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable()
export class BaseService {
    
    _baseUrl: string = environment.apiBaseUrl;

    constructor(protected httpClient: HttpClient, protected _injector: Injector){}

    protected getRequestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': `application/json, text/plain, */*`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,DELETE,OPTIONS'
        });

        return { headers: headers };
    }

    protected getBaseUrl() : string {
        return this._baseUrl;
    }
}