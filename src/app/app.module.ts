import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ComponentsModule} from './components/components.module';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

import {NgxMaskModule} from 'ngx-mask';
// import {ToastrModule} from 'ngx-toastr';

import {SwiperModule} from 'ngx-swiper-wrapper';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorPageModule} from './pages/error/page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ComponentsModule,
    SwiperModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
    ErrorPageModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
