import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {BlankPageComponent} from './page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlankPageComponent
      }
    ]),
  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule {

}
