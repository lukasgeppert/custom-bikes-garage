import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule, Title } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
// Application modules
import { AppComponent } from './app.component'
import { NavComponent } from './layout/nav/nav.component'
import { AuthModule } from './pages/auth/auth.module'
import { BikesModule } from './pages/bikes/bikes.module'
import { BuildersModule } from './pages/builders/builders.module'
import { HomeModule } from './pages/home/home.module'
import { AppHttpInterceptorService } from './shared/_services/app-http-interceptor.service'
import { HttpErrorHandler } from './shared/_services/http-handle-error.service'

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    BikesModule,
    BuildersModule,
    AuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule.forRoot(),
  ],
  providers: [
    Title,
    HttpErrorHandler,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
