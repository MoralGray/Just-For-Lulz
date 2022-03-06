import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderItemComponent} from './header/item.component';
import {FooterItemComponent} from './footer/item.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {
  GalleryComponent,
  MessageModalComponent
} from './modals';
import {NgxMaskModule} from 'ngx-mask';
import {SwiperModule} from 'ngx-swiper-wrapper';

@NgModule({
  declarations: [
    HeaderItemComponent,
    FooterItemComponent,
    MessageModalComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxMaskModule,
    SwiperModule
  ],
  exports: [
    HeaderItemComponent,
    FooterItemComponent,
    MessageModalComponent,
    GalleryComponent,
  ]
})

export class ComponentsModule {
}
