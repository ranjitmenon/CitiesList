import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CitiesEndpoint extends BaseService {

    constructor(_httpClient: HttpClient, _injector: Injector) {
        super(_httpClient, _injector);
    }

    // city api endpoints

    getAllCities() {
        return `${this._baseUrl}/api/cities`;
    }

    deleteCity(id) {
        return `${this._baseUrl}/api/cities/delete-city//${id}`;
    }
}