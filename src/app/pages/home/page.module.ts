import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PageLinksItemComponent} from '../../components/page-links/item.component';

import {HomePageComponent} from './page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent
      }
    ]),
  ],
  declarations: [HomePageComponent, PageLinksItemComponent]
})
export class HomePageModule {

}
