import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { AuthService } from '../../pages/auth/_services/auth.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public constructor(private titleTagService: Title, public auth: AuthService) {}
  /**
   * setTitle
   *
   * pageTitle: string
   *
   */
  public setTitle(pageTitle: string) {
    this.titleTagService.setTitle(`${pageTitle} | CustomBikesGarage`)
  }

  ngOnInit() {}
}
