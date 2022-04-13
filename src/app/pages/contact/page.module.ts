import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ContactPageComponent} from './page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactPageComponent
      }
    ]),
  ],
  declarations: [ContactPageComponent]
})
export class ContactPageModule {

}
