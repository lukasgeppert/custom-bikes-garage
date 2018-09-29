import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router';
import { AuthService } from '../../pages/auth/_services/auth.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public constructor(private titleTagService: Title, public auth: AuthService, private router: Router) {}
  /**
   * setTitle
   *
   * pageTitle: string
   *
   */
  public setTitle(pageTitle: string) {
    this.titleTagService.setTitle(`${pageTitle} | CustomBikesGarage`)
  }

  ngOnInit() {
    if (this.auth.getToken()) {
      this.auth.getUser().subscribe();
    }
  }

  onLogout() {
    this.auth.onLogout().subscribe();
  }
}
