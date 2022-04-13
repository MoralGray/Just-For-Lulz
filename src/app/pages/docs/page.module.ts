import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {DocsPageComponent} from './page';
import {ChavoItemComponent} from '../../components/chavo/item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DocsPageComponent
      }
    ]),
  ],
  declarations: [DocsPageComponent, ChavoItemComponent]
})
export class DocsPageModule {

}
