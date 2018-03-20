import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { We7RouterModule } from 'meepo-we7-router';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MeepoUrlSerializer } from 'we7-router';
import { UrlSerializer, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'app/entry/site/shibida_mshoper',
      loadChildren: 'app/routes#RoutesModule'
    }]),
    We7RouterModule.forRoot(environment),
    SharedModule,
    HttpClientModule
  ],
  entryComponents: [],
  providers: [{
    provide: UrlSerializer,
    useClass: MeepoUrlSerializer
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
