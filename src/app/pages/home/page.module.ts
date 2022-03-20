import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PageLinksItemComponent} from '../../components/page-links/item.component';
import {ChavoItemComponent} from '../../components/chavo/item.component';
import { AgmCoreModule } from '@agm/core';
import {ClickOutsideModule} from 'ng-click-outside';

import {HomePageComponent} from './page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBP9AinsakmuPkSRbQ6AqQG_Y1ecfbVYeY'
    })
  ],
  declarations: [HomePageComponent, PageLinksItemComponent, ChavoItemComponent]
})
export class HomePageModule {

}
