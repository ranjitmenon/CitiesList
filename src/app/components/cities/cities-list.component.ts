import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import {CitiesService} from '../../services/cities/cities.service';

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{
   
    cities: ICity[] = [];
    
    constructor(private cityService: CitiesService) {}

    ngOnInit(): void {
        this.cityService.getCities().subscribe(cities => {
            this.cities = cities;
        });
    }

    deleteCity = id => {
        this.cityService.deleteCity(id).subscribe(res => {
            this.cities = this.cities.filter(city => city.id !== id);
        })
    }
}