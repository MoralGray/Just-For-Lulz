import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ErrorPageComponent} from './page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ErrorPageComponent
      }
    ]),
  ],
  exports: [
    ErrorPageComponent
  ],
  declarations: [ErrorPageComponent]
})
export class ErrorPageModule {

}
