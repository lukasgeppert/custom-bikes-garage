import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

// App imports
import { AuthService } from '../../auth/_services/auth.service'
import { Bike } from '../bike'
import { BikesService } from '../_services/bikes.service'

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.scss'],
})
export class BikeDetailComponent implements OnInit {
  bike: Bike
  isLoading: Boolean = false
  userVote: number

  builders: Array<Object> = [
    { id: 1, name: 'Diamond Atelier' },
    { id: 2, name: "Deus Ex Machina's" },
    { id: 3, name: 'Rough Crafts' },
    { id: 4, name: 'Roldand Sands' },
    { id: 5, name: 'Chopper Dave' },
  ]

  constructor(
    private bikeService: BikesService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  checkBikeOwner(): Boolean {
    // if (this.auth.currentUser.id === this.bike.user.id) {
    //   return true
    // } else {
    //   return false
    // }
    return false;
  }
}
