import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';
import { BikesService } from '../_services/bikes.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikeListComponent implements OnInit {
  // Using Bike Model class
  bikes: Bike[];
  isLoading: Boolean = false;
  public searchText: string;

  constructor(
    private bikeService: BikesService
  ) { }

  ngOnInit() {
  }

}
