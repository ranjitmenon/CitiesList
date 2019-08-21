import { Injectable, Injector } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CitiesEndpoint } from "./cities-endpoint.service";
import {BaseService} from '../base.service';
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesService extends BaseService {
    constructor(httpClient: HttpClient, _injector: Injector, private _citiesEndpoint: CitiesEndpoint) {
        super(httpClient, _injector);
    }

    getCities()  {
        return this.httpClient.get<ICity[]>(this._citiesEndpoint.getAllCities(), this.getRequestHeaders());
    }

    deleteCity(id) {
        return this.httpClient.delete(this._citiesEndpoint.deleteCity(id), this.getRequestHeaders());
    }

}